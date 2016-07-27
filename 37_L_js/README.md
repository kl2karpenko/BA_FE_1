# Домашнее задание по JS.


<ol>
        <li>Either start with your code from the jQuery workshop, or download the <a href="exercise_events_before.html">starter file</a>.</li>
        <li>In the <code>body</code> of your HTML, create a &lt;div&gt; to hold the video player, either below or to the side of the list, and give it an id.</li>
        <li>In the <code>script</code> tag that you were working in before, create a <code>thumbnailify()</code> function that takes a single argument.</li>
        <li>Move the code that is currently inside your <code>for</code> loop into that <code>thumbnailify()</code> function.</li>
        <li>Change the contents of your function so that it uses a single argument, which is a jQuery object that represents an <code>&lt;a&gt;</code>, rather than an array of elements.</li>
        <li>Move the <code>for</code> loop so that it occurs after you define <code>thumbnailify()</code></li>
        <li>Call <code>thumbnailify()</code> from inside your <code>for</code> loop.</li>
        <li>Make sure your player first works like it did before. <strong>Hint: </strong>you should only reference an array index from inside of the <code>for</code> loop.</li>
        <li>Now, in the <code>thumbnailify()</code> function, add a click listener
        to the link. We recommend using an anonymous function for the callback (not a named function). Put a <code>console.log</code> inside the callback to make sure it works.</li>
        <li>In the click listener callback, you will be using the "create and store, manipulate, inject" pattern to display an embedded video in the DIV you created.</li>
        <li>To find out what the code for an embedded Youtube video looks like, go to Youtube.com and find any embed code
        for a video.</li>
        <li>You can use youtube.generateEmbedUrl() from the <a href="../youtube_doc.html">youtube.js library</a> to generate an embed URL.</li>
        <li>Use string concatenation, <code>.html()</code>, or other jQuery method of your choice to assemble and insert the embedded video element.</li>
        <li>Check your work! Try all your video links. Is there anything you need to change?</li>
        <li>As a bonus, try to make the video watcher &lt;div&gt; fade in using <a href="http://jquery.com">jQuery</a>.</li>
      </ol>
      
      
      
      + вот вам полезные ссылочки на материалы:
      
      
      https://bocoup.com/weblog/publishsubscribe-with-jquery-custom-events
      
      https://learn.jquery.com/events/handling-events/
      
      http://www.learningjquery.com/2008/03/working-with-events-part-1
