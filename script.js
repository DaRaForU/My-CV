<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">function hamburg(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const navbar = document.querySelector(".dropdown")</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>navbar.style.transform = "translateY(0px)"</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">function cancel(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const navbar = document.querySelector(".dropdown")</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>navbar.style.transform = "translateY(-500px)"</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">// Typewriter Effect</span></p>
<p class="p1"><span class="s1">const texts = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"DEVELOPER",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"DESIGNER",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>"YOUTUBER"</span></p>
<p class="p1"><span class="s1">]</span></p>
<p class="p1"><span class="s1">let speed<span class="Apple-converted-space">  </span>=100;</span></p>
<p class="p1"><span class="s1">const textElements = document.querySelector(".typewriter-text");</span></p>
<p class="p1"><span class="s1">let textIndex = 0;</span></p>
<p class="p1"><span class="s1">let charcterIndex = 0;</span></p>
<p class="p1"><span class="s1">function typeWriter(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if (charcterIndex &lt; texts[textIndex].length){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>textElements.innerHTML += texts[textIndex].charAt(charcterIndex);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>charcterIndex++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>setTimeout(typeWriter, speed);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>else{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>setTimeout(eraseText, 1000)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">function eraseText(){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>if(textElements.innerHTML.length &gt; 0){</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>textElements.innerHTML = textElements.innerHTML.slice(0,-1);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>setTimeout(eraseText, 50)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>else{</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>textIndex = (textIndex + 1) % texts.length;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>charcterIndex = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>setTimeout(typeWriter, 500)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">window.onload = typeWriter</span></p>
</body>
</html>
