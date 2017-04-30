echo Use TCC to compile TCC
 
echo Set CC=tcc
 
set CC=tcc
set target=-DTCC_TARGET_PE -DTCC_TARGET_X86_64
set P=64
 
echo tools: tiny_impdef.exe, tiny_libmaker.exe
 
%CC% %target% win32/tools/tiny_impdef.c -o tiny_impdef.exe
%CC% %target% win32/tools/tiny_libmaker.c -o tiny_libmaker.exe
 
echo Compile libtcc.dll
 
if not exist libtcc\nul mkdir libtcc
%CC% %target% -w -shared -DLIBTCC_AS_DLL -DONE_SOURCE libtcc.c -o libtcc.dll
tiny_impdef libtcc.dll -o libtcc/libtcc.def
 
echo Compile tcc.exe
 
%CC% %target% tcc.c -o tcc.exe -ltcc -Llibtcc
 
echo Compile libcc1.a
 
%CC% %target% -c lib/libtcc1.c
%CC% %target% -c win32/lib/crt1.c
%CC% %target% -c win32/lib/wincrt1.c
%CC% %target% -c win32/lib/dllcrt1.c
%CC% %target% -c win32/lib/dllmain.c
%CC% %target% -c win32/lib/chkstk.S
%CC% %target% -c lib/alloca86_64.S
tiny_libmaker lib/libtcc1.a libtcc1.o alloca86_64.o crt1.o wincrt1.o dllcrt1.o dllmain.o chkstk.o