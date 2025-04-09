from rest_framework import serializers
from ..models import Event
from sections.api.serializers import SectionSerializer

class EventSerializer(serializers.ModelSerializer):
    section = SectionSerializer()
    
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'start_time', 'end_time', 'location', 'section']

