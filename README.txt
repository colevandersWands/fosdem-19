

thesis questions
  1. what should be the goals of introductory computing education
  2. to whom are such goals important (say this better?)
  3. what is the role of programming in this ideal course
  4. what is required from a language/environment used in this course
  5. how could such a course be structured and integrated?


presentation points
  goals of cs 1
    if they leave it's because they want to
      and they walk away understanding how it's important and how it fits
    express and understand fundamental cs ideas
    get the gist of applied computing (integrating cs ideas into real life)
    * learn relationship of code to real-world contexts
        cs isn't just programming, it's also about applied computing
        this requires a deeper understanding of programs active in the world
        which can be learned from the beginning - full complexity, maximal simplicity
    a successful student is 'consoliterate' (find new word for this). defined:
      - include the 4 questions
        - https://github.com/colevandersWands/understanding-code/blob/master/examples.js
        but rewrite and embed them in the repo, maybe with simple snippets?
      - and a new version of this diagram
        - https://github.com/elewa-academy/collaborative-development
        with a bigger circle that represents the global environment (ethics)
      if students are to explore how code integrates with practice and the world, give them environment that encourages this
      the 4 objectives of 1 file of code
        - full complexity, maximal simplicity
        correctly describe an algorithmic strategy
        contain correct instructions for the compiler
          no errors
          correct behavior
        communicate intentions and behavior
          by text directly
          indirectly as log readouts via machine execution
        create real-world impact (user or other)
      once students grasp this concept many a door opens with less need for justification
        classroom-practically speaking
          justifying awkward or not-useful-seeming exercises to students becomes much simpler
        the way is paved for discussion of the ethical and human sides of programming
        easily sets up for computation model (data science, ...)
  to whom is important
  role of programming
    enable exploration of theoretical
      especially certain key 'threshold concepts'
    enable practical application
    engage and motivate
    apply beyond the scope of coding exercises
      'consoliterate' content & assignments
      websites
      exercises become study pieces
      generally speaking, code immersion
    grow with students
    consoliteracy
      link to rhetorics of code
      and 4 points
      students should be able to take notes in code
      interact with live programs
      easily share work and build a portfolio
      know to structure code and work with machine
  what does this course look like?
    the browser environment allows for hella this
    full complexity, maximal simplicity. strive for
      this will take creativity, effort and testing
        but that's being done, just into environments and such
          they fail honesty test
        instead put that energy into pure code/environment exercises
        learning and efforts will directly scale into skill transfer
    this type of integration ...
      addresses many issues of programming-first approach
      focus on process and analysis over outcomes by nature of exercises/finished-projects
      enables students to do realistic projects with level-appropriate requirements
  requirements for language
    guzdial points
      1. Connect to what learners know
        yes
      2. Keep cognitive load low
        not inherently, but tasks can be devised
      3. Be honest
        yes
      4. Be generative and productive
        yes
      5. Test, don’t trust
        yes
    plus
      accessible
      encourage interactions beyond 'pure programming tasks'
        the more different time they spend with code the better
  this can all be done in javascript
    a beginner language should ... (- Guzdial)
      1. Connect to what learners know
      2. Keep cognitive load low
      3. Be honest
      4. Be generative and productive
      5. Test, don’t trust  
    For Guzdial, JS fails on points 1, 2, 4 & 5.  
    his observed shortcomings can be overcome with clever ID, leaving a programming language (and great learning environment!) very well-suited to beginner programmings. (preface - these points all address teaching students of ~17+, or younger but dedicated students)
      1. While JS's textual format & syntactic features may not be the most beginner friendly, this can be overcome with a solid series of exercises build around click-and-drag, copy-paste, and fill-in-the-blank exercises. This initial hurdle pays off when students can immediately begin programming simple websites, connecting to something fun and practical for sharing projects with a live hosting on gh-pages
      2. JS is filled with unnecessary complexity (especially at the beginning in it's primitives and operators).  This can be circumvented by encouraging a subset of JS & providing solid exercises that do not require students to veer out of this subset.  Once students are comfortable working with basic JS scripts, these 'complex' features can be used to study & understand true cs concepts like composition, sets/functions, ... as in 'computation'.  In fact, the flexibility of JS can be used over-and-over again to create self-reporting exercises in ways that are not possible in other languages (exansions, recursion, manipulating boolean equations, ...). One of the clearest examples of this is how JS can be refactored to explain itself with 'expanding'
      3. concur
      4. JS can be exceptionally generative and productive.  Once students understand how to write self-reporting scripts (effectively turning their script into custom learning & feedback environments), it opens up enormous possibilities for exploring & discussing significant ides in CS (complexity, algorithmic strategy, boolean algebras, proof, sets & mappings) and in STEM (data science with tools like d3 or tensorflow, program core vs ui,... find more?).  The developer console on most browsers is also an incredibly powerful tool for inspecting & understanding programs that can be mastered in an introductory course if correctly scaffolded into the curriculum. Once mastered, it can be used to write 'consoliterate' programs who's source code forms it's own documentation and write-up.  This can be thought of a local jupyter notebook with no depedancies beyond a browser. In short, the flexibilty of JS and the power of standard browser tools can be used to design a course that will have higher cognitive load upfront than a beginner-friendly environment, but will quickly make up for lost time when there is no need to transfer learning to a different professional environment when it is time to move on.  All learning was done in place -> the context was the content!  Console frameworks give students lots of experience reading well-written code & working within existing code, both are skills that can be difficult to teach and awkward to wedge into standard course methods.
      5. i've been using JS for a couple years and have not only had great success teaching beginners, but have also used it to teach data science, webvr (example of no-transfer to something cool & applied), & even had students experienced in other programming languages leave meetups having learned something substantial about programming in general and even their own language
    benefits of an open zero-dependancy cs program in js
      accessability
        just a browser and github account to get started, in professional environment
        no install/dependancy issues that can cause such hangups and discouragement
      growth with learner
        js can start with a (relatively) simple (see Guzdial) subset
        then grow as students are prepared for more advanced theoretical and practical concepts
      student empowerment
        nothing between them and the interpreter but code they can read
        frameworks and environments can be gradually introduced
      direct access to bigger context and questions
    included examples, illustrating what can be done with js at different levels
      1. logging
        using fill-in-the-blank self-logging exercises for students to learn tracing and practice reading code
        (working with existing code is more effective at the novice level)
      2. recursion
        the flexibility of JS syntax allows exercises that engage the same concept on different levels, all in pure code
          (much of this has to do with blocks, which most novice languages don't hav)
        higher level of student involvement in valid execution of the code than previous example
        recursion is a critical threshold concept on the way from 'concrete' imperative programming to full cs thinking
      3. simple consoliterate project
        applies the logging and recursion skills from before into a simple yet complete project
        each step is something doable for beginners, the whole project together is legit
          there is a lot of repetition and reapplication of the same design & testing patterns
        the only thing they don't write is run_tests, but that is simple enough it can be understood with some effort
        the running program exposes all aspects of an applied computing project directly to the student
        and can be easily shared or applied outside of the classroom. provides the 'framework' necessary to do a side project
        full complexity, maximal simplicity.  
          no state, it's not necessary to understand the components of an applied computing project
            and isn't even an encouraged practice in much applied computing (ie. data science)


slides
  - target 5-10 minutes
  introduction slide
  thesis questions (first list, the deeper slide for each)
    1. what should be the goals of introductory computing education
    2. what is the role of programming in this ideal course
    3. what is required from a language/environment used in this course
    4. how could such a course be structured and integrated?
  rhetorical space diagram (to summarize main objective of cs 1)
    4(-5?) questions for exploring/understanding the space
  define objectives for this course
    list them from above
      applied computing is 'embedding' real-world problems in computatinal 
    a couple examples of what this student can do after 2 semesters
  role of programming/language in this course
    engage and motivate
    connect to theoretical
    carry students over critical threshold concepts
    grow with students
    be relevant beyond the scope of completing exercises
  requirements for such a language
    guzdial's 5
    have comprehensive runtime/devtime environment
      students should be able to look inside the runtime, using meta-coding and inspector tools
    the technical barrier should be nill
    encourage interacting with it beyond classroom exercises or 'nerd-pure' side-projects
  what does this course look like? full complexity, maximal simplicity
    context is content -> materials should be written in accessible code designed for the learning environment, and hosted as source code. exercises should be completed and submitted as source code is 
      this will take creativity and effort to devise, but no more than the energy being put into custom learning environments.  and all context mastery is germane to later skill transfer
    assignments focus on completed and written steps, the completed project engages students on all aspects of the rhetorical space (to a level appropriate degree)
      completed exercises can now double as study material for others
      and students are more prepared to help their peers while simply 1-2 steps ahead
    exposes students to practical use cases early on in a not-artificial way. they should be able to and want to share their finished projects with non-cs students from day ~3
    think of it as immersion. constant exposure from day1, scaffolded creation over time
      such an approach gets students exposed to code early, earning the benefits of a programming-first cs curriculum design paradigm while avoiding many of the pitfalls
  this can all be done with JS, chrome, terminal (or github desktop), and a text editor. if we focus our energies on creating content and designing student experiences
    readdress guzdial's 5 points
    then my extras
    enables a 'zero-dependency' course which is accessible, adaptable, empowering and scalable
    direct access to broader context
  3 examples included in this repo
    1. how a js course of 'console frameworks' can be used to teach students critical threshold skills like tracing, variables, errors, and logging/asserting
      look at it on their owns
    2. creative exercises can confront students with cs-critical concepts like recursion with an appropriately scaled-up technical involvement (more copy/pasting and such)
      look at it on their owns
    3. a full example of what an end-of-semester consoliterate project might look like. teachers would assign an empty 'starter repo' with testing functions, emtpy files, and behavioral requirements. students would complete each step in order, writing their source-code to provide a full consoliterate experience
      quick flip-through together on the big screen
      notice concept of 'embedding' - structure preserving map
___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>

