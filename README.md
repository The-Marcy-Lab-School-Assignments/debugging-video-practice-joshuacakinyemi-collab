# Complex Debugging & Verbalization Practice

As software engineers, we frequently encounter interconnected functions that work together to accomplish a task. When bugs arise in these systems, they can create cascading effects that impact multiple parts of the program. Being able to systematically debug these issues and clearly communicate our findings is an essential skill.

When submitting a bug fix through a pull request, clearly documenting the problem and how you fixed it will make it easier for your engineering manager to approve your fix!

This exercise will help you develop:
- Systematic debugging approaches
- Technical communication skills
- Understanding of data flow between functions
- Clear problem articulation abilities

## Debugging Tips

For each of these topics, ask yourself these questions:

**Variables:**
- Does this variable need to change? Should it be `let` or `const`?
- What is the scope of this variable?

**Arrays:**
- Am I starting and ending my loop at the right indexes?
- Am I changing the original array when I shouldn't?

**Functions:**
- Did I return a value?
- Did I return too early (like inside a loop)?
- Am I calling the function with `()`?

**Math:**
- Am I adding strings instead of numbers?
- Did I divide by zero?
- Do I have `NaN` somewhere?

**Conditions:**
- Did I use `=` instead of `===`?
- Should this be `&&` (AND) or `||` (OR)?
- Did I forget `else`?

---

## Reading Errors

How do you read an error message like this?

```sh
➜ node src/modify-with-video-1.js 
debugging-video-practice/src/modify-with-video-1.js:35
      lowestScore = scoresArr[i];
                  ^

TypeError: Assignment to constant variable.
    at dropLowestScore (/Users/benspector/Documents/curriculum-development/assignments/mod-1/debugging-video-practice/src/modify-with-video-1.js:35:19)
    at displayResults (/Users/benspector/Documents/curriculum-development/assignments/mod-1/debugging-video-practice/src/modify-with-video-1.js:57:26)
    at Object.<anonymous> (/Users/benspector/Documents/curriculum-development/assignments/mod-1/debugging-video-practice/src/modify-with-video-1.js:68:1)
    at Module._compile (node:internal/modules/cjs/loader:1529:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1613:10)
    at Module.load (node:internal/modules/cjs/loader:1275:32)
    at Module._load (node:internal/modules/cjs/loader:1096:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.19.2
```

1. **Where to look:** File names and line numbers are at the end of each error line
2. **Stack traces:** Read from bottom up to find *your* code
3. **Error types:** These are the most common error types
   - `SyntaxError` — There is invalid JavaScript (e.g. you wrote `5 x 3` instead of `5 * 3`)
   - `TypeError` — The operation is invalid (e.g. you tried to reassign a `const` variable)
   - `ReferenceError` — The variable referenced does not exist in this scope
4. **Common messages:**
   - `undefined is not a function` → Forgot `()` or typo in function name
   - `Cannot read property of undefined` → Accessing property of undefined variable
   - `Unexpected token` → Missing bracket, parenthesis, or quote
   - `__ is not defined` → Typo or forgot to declare variable

## The Problem

**File:** `src/modify-with-video-1.js`

**Grading:** 

You can earn up to 10 points for this question.
- Bug Identification (3 points): 1 point per bug correctly identified
- Bug Fixes (3 points): 1 point per working fix
- Video Quality (4 points):
  - Technical vocabulary (1 point)
  - Completeness - addresses all parts (1 point)
  - Clarity - easy to follow (1 point)
  - Conciseness - stays within time limit (1 point)

For more details, refer to the [Rubric](./rubric.md).

**Tips:**

- Do the code analysis BEFORE fixing anything - you need to explain what was wrong
- Write down your bugs before recording
- Do a practice run before recording
- Don't rush - clarity is more important than speed
- If you make a mistake, you can re-record!
- It's okay to refer to notes during recording!

### Part 1: Code Analysis (Do this FIRST, before fixing anything)
1. Open `src/modify-with-video.js`
2. Read the code carefully
3. Answer these questions (write them down - you'll need them for your video):
   - What expectations do you have about the program?
   - What is this program supposed to output? 
   - Calculate it by hand if you need to!

### Part 2: Observe
1. Run the code to see what happens
2. Take note of errors and anything that doesn't meet your expectations (write them down - you'll need this for your video)

### Part 3: Find and Fix Bugs
1. Identify **3 bugs** in the code
2. For each bug, write down:
   - What line it's on
   - What's wrong
   - Why it causes a problem
3. Fix all 3 bugs
4. Run the code again to verify it works:
   ```bash
   node src/modify-with-video.js
   ```

### Part 4: Record Your Video (2-4 minutes)
1. Use **Loom** to record your screen. For instructions on downloading Loom, refer to the [Marcy GitBook](https://marcylabschool.gitbook.io/marcy-lab-school-docs/environment-setup/loom).
   
2. In your video, explain:
   - What you expected the code to do (from Part 1)
   - The 3 bugs you found:
     - Where each bug is
     - What's wrong
     - Why it causes a problem
   - The fixes you implemented
   
3. Use proper technical vocabulary:
   - ✅ "greater than operator" (not "right arrow")
   - ✅ "assignment operator" (not "equal sign")
   - ✅ "strict equality operator" (not "three equal signs")
   - ✅ "array index", "object property", "loop condition"

4. Keep your video between 2-4 minutes

5. Upload your video and add the link to the comment at the top of `src/modify-with-video.js`
