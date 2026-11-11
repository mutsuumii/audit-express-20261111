# Code injection via eval()
# CWE-95 | Severity: CRITICAL
# File: test/res.redirect.js line 116

**Risk:** eval() with dynamic input runs arbitrary JavaScript.

**Fix:** Use JSON.parse() for data. Pass function references, not strings, to setTimeout.
