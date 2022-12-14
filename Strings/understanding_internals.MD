**Encoding**: The way how strings are stored in binary.

## **Types of Encodings**
1. **ASCII 7 bit** - 0 to 127 (1960 - 1970s):
    - Each character had its own ascii code (decimal number i.e base10)
    - Stored in hard drive/SSD as binary (base 2)
    - A -> 65 a -> 92 (1:1 mapping of character and the ascii code)

<br/>

2. **Extended ASCII/(ISO-8559-1)** - 0 to 255 (Mid 1980s):  
    - Superset of ASCII 
    - 0 to 127 (Reserved for English characters and other printable characters)
    - 128 - 191 (Reserved for other languages) - Each language was given a range
    
<br/>

3. **UCS-2 (0-65535)** Early 90s - Windows, Java, JavaScript, Python, C#:
    - 16 bits / 2 bytes
    - A -> U+0041 (1:1 mapping of characters and code points)
    - Basic Multilingual Plane (BMP): whatever character fits in the range 0 to 65535 bits.
    - Code point is a magic number -> U+<magic_number>
    - Each character in unicode has a corresponding code point.
    - Internet came in late 1990s-early 2000s and emojis came.
    - Emojis can't be fit in BMP.

<br/>

4. **UTF-16 (Superset of UCS-2/Extension of UCS-2)** - Java, JavaScript, Python, C#:
    - Any character falling out BMP range, it used 32 bits or 4 bytes.
    - 0 to 4294967295
    - UTF-16 is a variable encoding, defaults to 16 bits or 2 bytes for BMP character
    - Any character which exceeds the BMP that is represented using surrogate pairs.
    - String value = High surrogate (Code point) + Low surrogate (Code point)
    - Problem: We need to persist the UTF-16 code point in hard disk/SSD  
    - Different OS'es handle the endianness in [different ways](https://qphs.fs.quoracdn.net/main-qimg-c3e98e027281dc41477c482a83cc5081-lq)
        - *Little endian* -> LSB is represented as 1st bit (Windows)
        - *Big endian* -> MSB is represented as 1st bit (MacOS, Linux)

            **Solution**: Add BOM (Byte order mark) character to beginning of every file
            - <code>U+FEFF</code> -> Little endian format
            - <code>U+FFFE</code> -> Big endian format
        - BOM is an invisible character which tells the OS the endian-ness of how to persist it in the disk.
    
<br/>

5. **UTF-32 / UCS-4**:
    - Fixed length, each characters will hold 32 bits/4 bytes.
    - Any character will fit in the range (0-4294967295)
    - <code>0000000 0000000 0000000 00111101 -> A</code> (Characters which fit in the BMP simply wastes the space)
    - It just the wastes the space.

<br/>

6. **UTF-8**:
    - UTF-8 grows from 1, 2, 3, 6 bytes.

<hr/>

## **Further reading**
- [Joel Spolky's blog on understanding Unicode at a very deep level](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
- [YouTube video to understand string encodings](https://www.youtube.com/watch?v=ut74oHojxqo)
- [YouTube video to understand Unicode encodings at a deep level](https://www.youtube.com/watch?v=bbkUn0o3L1Y&t=839s)
- [Good blog post to understand Unicode encodings](https://betterexplained.com/articles/unicode/)