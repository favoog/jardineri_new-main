
from django.urls import path
from . import views

urlpatterns = [
    path('', views.cargarInicio),
    path('registrar', views.cargarRegistrar),
    path('carrito', views.cargarCarrito),
    path('registrado', views.cargarRegistrado),

    
    path('agregarProducto',views.cargarAgregarProducto),


    path('agregarProductoForm',views.agregarProducto),

    path('editarProducto/<sku>',views.cargarEditarProducto),

    path('editarProducto',views.editarProducto),
    path('eliminarProducto/<codigo_producto>',views.eliminarProducto),

    path('carrito',views.carrito)
]