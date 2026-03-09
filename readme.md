Answers for reflection Questions
*****************************************
Q1. What is the difference between res.send() and res.sendFile()? When would you use one over the other?
Ans: 
res.send() is used to send a response directly from the server to the client. It can send text, JSON data, HTML strings, or objects. This method is useful when we want to quickly send simple content like messages or API responses.

res.sendFile() is used to send an entire file from the server to the client, such as an HTML file, image, or document. It reads the file from the server and sends it as the response.

I would use res.send() when sending small pieces of data like messages or JSON responses, and res.sendFile() when serving actual files such as HTML pages stored in the project directory.
********************************************************************************

Q2.Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?

Ans:
The path module is used to safely create file paths that work across different operating systems. It helps ensure that the correct file location is found regardless of the system environment.

If we only used a relative path like 'public/index.html', the server might not correctly locate the file depending on where the server is executed from. This could cause errors such as file not found or the server sending the wrong file. Using path.join() with __dirname ensures that the correct absolute path is used.

********************************************************************************
Q3.How would you add a third page (e.g., a menu page) to this server? What steps would you take?
Ans:
To add a third page such as a menu page, I would follow these steps:
Create a new HTML file called menu.html inside the public folder.
Add the content for the menu page inside that file.
Create a new route in the server file to handle requests for the menu page.
Use res.sendFile() to send the menu.html file when the route is accessed.

Example route:
app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

Start the server and test the page by visiting http://localhost:3000/menu in the browser.
********************************************************************************