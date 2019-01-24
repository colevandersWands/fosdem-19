
zeroing in on threshold concepts in cs1
  choosing recursion
  bridging writing code and learning theory
  worked examples
  process over product


role of programming in cs 1 class
  - consoliteracy
    link to rhetorics of code
    and 4 points
  students should be able to take notes in code
  interact with live programs
  easily share work and build a portfolio
  know to structure code and work with machine
  * learn relationship of code to real-world contexts
    cs isn't programming, it's understanding and applying computation


main points

  'threashold conncepts'
    recursion
    papers
      Threshold Concepts in Computer Science: a multi-national empirical investigation ~
      http://crpit.scem.westernsydney.edu.au/confpapers/CRPITV95Rountree.pdf
      https://www.acm.org/binaries/content/assets/education/curricula-recommendations/cc2001.pdf
        - janke learning method 
          integrates theory and practice sooner them early and together
            and complements rather than supplements introduction of theory
            write about and study theory in code!
          best of coding-first and algorithm-first
        pg 22. problems with programming first
          theory & strategy late
          wrong idea of cs
        pg 31. functional first
          [taught sooner] most notably recursion, linked data structures, and functions as first-class data objects
  focuses & criteria for exercises
    combat faults of programming-first while still promoting code fluency
    formal manipulations
    self-assessing
    no dependencies
    in professional environment
    process over product
    prof tasks are not novice exercises
    logging


focus on exercises that
  cover csy things
  have smooth and simple exercises
  focus on thoughtless manipulations
  emphasize process over product
  can't be done outside js

ideas
  top runners
    mapping & demapping
      to give meaning to formal manips
      or is it the point that focusing on the process is enough?
      brings in dom and ui
      cant be done in the same way with any other language
    these can be merged
      - can be done in other languages, reject?
      boolean algebra
      solving boolean solutions
      multi-body conditionals
    recursion
  too subjective for this ?
    analyzing performance
    sets and mappings
      unless i can find something about the specs


oldd stuff
  basic 'code literacy' before cs concepts
    - leave this out for fosdem, keep it for whitepaper
    learn code as communication before entering into cs
    cs 100 should be preceded by 'consoliterate coding'
    super simple programming challenges
    focus on reading, logging, and note-taking in code


general structure
* what's a novice 
* what are the difficulties in learning/teaching them
* per difficulty
    * what's being done about this, how well it's working 
    * how JS can be used to address these things
* how JS can move beyond the other methods  
* and these things can go for not-novices, bring them to nls


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


___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>

