import ctypes
 
lib = ctypes.CDLL('multiply.dll')
result = lib.multiply(3, 2)
print(result)