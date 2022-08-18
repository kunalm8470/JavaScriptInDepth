### **Regex engine**
    Given an input regex and a free text, it can do the following operations.
        - Pattern matching
        - Validate against a particular
        - Replace certain text with a pattern

*Different programming languages have different engines.*

### **Types of entities making up a regular expression**
    1. Metacharacters -> Characters which has special meaning to the regex engine
    \ (backslash), ? (question mark), [ (opening square bracket), + (Plus sign)
    (Note: To escape we should escape it with a backslash \)

    2. Literals -> Anything apart from metacharacters


### **Tokens**
    . -> Match 0 or more characters (except \n or \r\n)
    + -> Match 1 or more characters (except \n or \r\n)

### **Digits**
    Digits are matched as literals (Exact matches).

### **Character Class**
    (Will match any character given in the character set)

    Examples include -
        1. gr[a|e]y - gray grey
        2. [A-Z]
        3. [0-9]
        4. [^abcd]ip -> Negated character class (Will ignore any character given in the character set)
        5. [\\] -> Metacharacters inside the character class need to be escaped
        6. [A-Za-z] -> Match all lowercase and uppercase english characters
        7. [0-9] or \d -> Match a single digit from 0 to 9
        8. \D -> Match a single character which is not a digit
        9. \s -> Match a single space exactly
        10. \S -> Match everything which is not a space
        11. \w same as [a-zA-Z0-9_]: matches any word character
        12. \W is the negation of \w

### **Alternation**
    Logical OR of the pattern
    
    Examples include -
        1. cat|dog|ostrich (1st alternative is cat, 2nd one is dog and last is ostrich)

### **Quantifiers**
    - (Specify how many characters to match)
    
    Example -
        \+1\s\([0-9]{3}\)-[0-9]{3}-[0-9]{5} or \+1\s\(\d{3}\)-\d{3}-\d{5} -> +1 (234)-789-09099

        {3} -> Exactly 3 occurences
        . -> 0 or more occurences
        + -> 1 or more occurences
        {2, 6} -> 2 is the lower bound and 6 is the upper bound (Minimum 2 occurences and Maximum of 6 occurences)
        {2,} -> Will try to match 2 characters minimum (2 is the lower bound), there is no upper bound

### **Anchors**
    ^\+1\s\(\d{3}\)-\d{3}-\d{5}$ -> ^ is the start of the line and $ end of the line

### **[Capturing groups](https://regex101.com/r/vhVCFH/2)**
    - Used to divide the matched text in the buckets
    - To write a capturing group we wrap it around a parenthesis.
        $0 -> Entire matched text
        $1 -> 1st capturing group
        $2 -> 2nd capturing group
    - We can name the capturing groups for better readibility and it is called Named capturing groups.
    - Syntax for JavaScript Regex engine is:
    (?<capturing_group_name> pattern)

### **Non capturing group**
    - If we want to ignore the result of a captured group, we can use non capturing group.
    
    - Example
    (?: pattern)

### **[Backreference](https://regex101.com/r/hnWqtj/1)**
    - To refer a capturing group inside a regex pattern itself we use Backreference.
    - Syntax
    (.+)\1 -> (Backslash followed by the index of the capturing group)

### **Lookarounds**
    Lookahead
        - Positive lookahead - (?=) - https://regex101.com/r/9NSmP5/1
            E.g: A(?=B) Find the expression A where B follows

        - Negative lookahead - (?!) -> Inverse of positive lookahead https://regex101.com/r/9NSmP5/2
            E.g: A(?!B) Find the expression A where B doesn't follow

    Lookbehind (Not supported in some regex engines and older browsers before 2015)
        - Positive lookbehind - (?<=) - https://regex101.com/r/9NSmP5/3
            E.g: (?<=B)A Find the expression A where B is infront of it.
        
        - Negative lookbehind - (?<!) - https://regex101.com/r/9NSmP5/4
            E.g: (?<!B)A Find the expression A where B is not infront of it.


### **Case study - [Password checker](https://regex101.com/r/HE5VMs/1)**

Implement a regex which validates the password having following rules -
    - Minimum 8 characters
    - At least 1 upper case character
    - At least 1 digit (0-9)
    - At least 1 lower case character
    - At least 1 special characters !@#$%^&*()

<hr />

### **Further reading**
- https://regex101.com/r/U013TP/1
- https://regex101.com/r/U013TP/2
- [Introduction to Regular Expressions Playlist - CodingTrain (YouTube)](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YEypLuls7iidwHMdCM6o2w)
- [Syntax reference for Regular Expressions](https://www.regular-expressions.info/)
- [Regular expressions playground - Regex101](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjQ_O7xoNH5AhW-pVYBHZiPC10QFnoECBoQAQ&url=https%3A%2F%2Fregex101.com%2F&usg=AOvVaw1wPBb2RAUNZnSKA8_YMkFY)