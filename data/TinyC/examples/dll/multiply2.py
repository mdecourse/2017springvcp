import ctypes

lib = ctypes.CDLL('multiply2.dll')
# By default functions are assumed to return the C int type. Other return types can be specified by setting the restype attribute of the function object.
lib.multiply.restype = ctypes.c_float
result = lib.multiply(ctypes.c_float(3.0), ctypes.c_float(2.0))
print(result)
