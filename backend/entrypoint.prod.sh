#!/bin/sh

pipenv run python manage.py migrate
pipenv run python manage.py collectstatic --noinput

# Créer le superutilisateur si les variables d'environnement sont définies
# if [ "$DJANGO_SUPERUSER_USERNAME" ] && [ "$DJANGO_SUPERUSER_EMAIL" ] && [ "$DJANGO_SUPERUSER_PASSWORD" ]
# then
#     echo "Creating superuser..."
#     pipenv run python manage.py createsuperuser --noinput \
#     --username $DJANGO_SUPERUSER_USERNAME \
#     --email $DJANGO_SUPERUSER_EMAIL

#     echo "from django.contrib.auth.models import User; user = User.objects.get(username='$DJANGO_SUPERUSER_USERNAME'); user.set_password('$DJANGO_SUPERUSER_PASSWORD'); user.save()" | pipenv run python manage.py shell
# else
#     echo "Superuser not created because required environment variables are not set."
# fi

# Exécuter la commande passée en argument
exec "$@"
