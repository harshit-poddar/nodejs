//node is c++ program that include chrome v8 js engine node give file to v8 for execution and show outpput in console

function sayhello(name)
{
    console.log('Hello' + name);
}

// sayhello("harshit");

// in node we dont have window or document objects These are part of runtime environment we get with browser. In node we have object to work with file, network , os
console.log(window);