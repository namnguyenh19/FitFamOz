"""fitfamoz URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^$', include('mysite.urls')),
    url(r'^message/', include('mysite.urls')),
    url(r'^about/', include('mysite.urls')),
    url(r'^match/', include('mysite.urls')),
    url(r'^friends/', include('mysite.urls')),
    url(r'^profile/', include('mysite.urls')),
    url(r'^user/', include('mysite.urls')),
    url(r'^signup/', include('mysite.urls')),
    url(r'^signupcont/', include('mysite.urls')),
    url(r'^login/', include('mysite.urls')),
    url(r'^admin/', admin.site.urls),
]
