# electron-copy-to-clipborad

copy file's path to clipborad for paste, see the index.js

tips: windows OS you need `exe/file2clip` and [.NET Framework](https://dotnet.microsoft.com/download/dotnet-framework/net472)

read path

```js
// mac os
const macUrl = clipboard.read('public.file-url')

// windows os
let windowsUrl = clipboard.readBuffer('FileNameW').toString('ucs2')
windowsUrl = windowsUrl.replace(new RegExp(String.fromCharCode(0), 'g'), '')
```

# reference

- [https://github.com/electron/electron/issues/9035#issuecomment-359161275](https://github.com/electron/electron/issues/9035#issuecomment-359161275)
- [file2clip](https://github.com/rostok/file2clip)
- [public.file-url](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html#//apple_ref/doc/uid/TP40009259-SW1)
- [https://www.codeproject.com/Reference/1091137/Windows-Clipboard-Formats](https://www.codeproject.com/Reference/1091137/Windows-Clipboard-Formats)
