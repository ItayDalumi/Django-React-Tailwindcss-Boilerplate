from django.shortcuts import render
from rest_framework.views import APIView 
from . models import *
from rest_framework.response import Response 
from . serializer import *
# Create your views here. 

# Create your views here.


def index(request):
    return render(request, 'frontend/index.html')

class TodoView(APIView): 
	serializer_class = TodoSerializer 

	def get(self, request):
		details = [{"title": detail.title, "description": detail.description, "mode": detail.mode, "date": detail.date}
				for detail in Todo.objects.all()]
		return Response({"data": details})  # Wrap the details list in a "data" key



	def post(self, request): 
		serializer = TodoSerializer(data=request.data) 
		if serializer.is_valid(raise_exception=True): 
			serializer.save() 
			return Response(serializer.data) 
