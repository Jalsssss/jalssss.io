const app = document.querySelector(' .app'),
      mode = document.querySelector(' #mode'),

      chats = document.querySelector(' .chats'),
      add_chat = document.querySelector(' #add-chat'),

      clear = document.querySelector('#delete'),

      qna = document.querySelector(' .qna'),

      input = document.querySelector(' .request input'),
      send = document.querySelector(' #send');

      mode .addEventListener('click', toggleMode);
      add_chat.addEventListener('click', addNewChat);
      clear.addEventListener('click', () => { chats.innerHTML = ''; });
      send.addEventListener('click', getAnswer);
      input.addEventListener('keyup', (e)=>{if(e.key === 'Enter'){
      getAnswer();  
      }
    });

      function toggleMode(){
        console.log('slicked');
        const light_mode = app.classList.contains('light');
        app.classList.toggle('light', !light_mode);
      }

      function addNewChat() { 
       chats.innerHTML += `
       <li>
       <div> 
           <iconify-icon icon="bi:chat-dots" class="icon"></iconify-icon>
           <span class="chat-title" contenteditable="">New Chat</span>    
       </div>    
       <div>
           <iconify-icon icon="bi:trash" class="icon" onclick="removeChat(this)"></iconify-icon>
           <iconify-icon icon="bi:vector-pen" class="icon" onclick="updateChatTitle(this)"></iconify-icon>
       </div>
       `;}

      const removeChat = (el) => e1.parentElement.parentElement.remove();
      const updateChatTitle =(el) => e1.parentElement.previousElementSibling.lastElementChild.focus();


      async function getAnswer (){
      try{
        const question =input.Value;
        app.querySelector('.hints p').innerHTML = question;
        qna.innerHTML += createChat(question); 

      } 
      catch (errr) {
       console.error(err); 
      } 
      }
      function createChat(question){
      return(
      `
      <div class="result">
<div class="question">
    <iconify-icon icon="material-symbols:person" class="icon blue"></iconify-icon>
    <h3> What is biology</h3>
</div>    

<div class="answer">
    <iconify-icon icon="codicon:robot" class="icon green"></iconify-icon>
    <p> What is physics </p>

 </div>
      
      
      
      
      `

      );  
      }

      
      
