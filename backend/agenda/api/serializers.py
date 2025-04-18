from rest_framework import serializers
from ..models import Event
from sections.models import Section

class EventSerializer(serializers.ModelSerializer):
    section = serializers.SlugRelatedField(
        slug_field='slug',
        queryset=Section.objects.all()
    )
    
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'start_time', 'end_time', 'location', 'section', 'highlight']

