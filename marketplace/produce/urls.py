from rest_framework import routers
from .api import ProduceViewSet


router = routers.DefaultRouter()
router.register('api/produce', ProduceViewSet, 'produce')
urlpatterns = router.urls