# Security audit: expressjs/express

Date: 2026-11-11 | Auditor: [mutsuumii](https://github.com/mutsuumii)

## Summary

Found 4 issue(s): 2 critical, 2 high.

## Findings

### 1. [HIGH] DOM XSS via innerHTML

**CWE-79** | `test/res.redirect.js` line 115

Setting innerHTML with user data allows script injection in other users' browsers.

```
var xss = 'javascript:eval(document.body.innerHTML=`<p>XSS</p>`);';
```

**Fix:** Use textContent. If HTML is needed, sanitize with DOMPurify.sanitize() first.
---

### 2. [HIGH] DOM XSS via innerHTML

**CWE-79** | `test/res.redirect.js` line 116

Setting innerHTML with user data allows script injection in other users' browsers.

```
var encodedXss = 'javascript:eval(document.body.innerHTML=%60%3Cp%3EXSS%3C/p%3E%60);';
```

**Fix:** Use textContent. If HTML is needed, sanitize with DOMPurify.sanitize() first.
---

### 3. [CRITICAL] Code injection via eval()

**CWE-95** | `test/res.redirect.js` line 115

eval() with dynamic input runs arbitrary JavaScript.

```
var xss = 'javascript:eval(document.body.innerHTML=`<p>XSS</p>`);';
```

**Fix:** Use JSON.parse() for data. Pass function references, not strings, to setTimeout.
---

### 4. [CRITICAL] Code injection via eval()

**CWE-95** | `test/res.redirect.js` line 116

eval() with dynamic input runs arbitrary JavaScript.

```
var encodedXss = 'javascript:eval(document.body.innerHTML=%60%3Cp%3EXSS%3C/p%3E%60);';
```

**Fix:** Use JSON.parse() for data. Pass function references, not strings, to setTimeout.
---
