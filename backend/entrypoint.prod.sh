#!/bin/sh

pipenv run python manage.py migrate
pipenv run python manage.py collectstatic --noinput

# Créer le superutilisateur si les variables d'environnement sont définies
if [ "$DJANGO_SUPERUSER_USERNAME" ] && [ "$DJANGO_SUPERUSER_EMAIL" ] && [ "$DJANGO_SUPERUSER_PASSWORD" ]
then
    echo "Checking if superuser already exists..."
    SUPERUSER_EXISTS=$(pipenv run python manage.py shell -c "from django.contrib.auth.models import User; print(User.objects.filter(username='$DJANGO_SUPERUSER_USERNAME').exists())")

    if [ "$SUPERUSER_EXISTS" = "True" ]
    then
        echo "Superuser already exists. Skipping creation."
    else
        echo "Creating superuser..."
        pipenv run python manage.py createsuperuser --noinput \
        --username $DJANGO_SUPERUSER_USERNAME \
        --email $DJANGO_SUPERUSER_EMAIL

        echo "from django.contrib.auth.models import User; user = User.objects.get(username='$DJANGO_SUPERUSER_USERNAME'); user.set_password('$DJANGO_SUPERUSER_PASSWORD'); user.save()" | pipenv run python manage.py shell
    fi
else
    echo "Superuser not created because required environment variables are not set."
fi

# Exécuter la commande passée en argument
exec "$@"
