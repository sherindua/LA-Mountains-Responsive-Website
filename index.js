AOS.init();

let displayContainerEle=document.querySelector('.schedule-mountain');
let mountain1btn=document.querySelector('#mountain1');
let mountain2btn=document.querySelector('#mountain2');
showMountain1();

function updateButtonCSS1(){
    mountain1btn.style="background-color: rgba(182,196,218);"
    mountain2btn.style="background-color: rgb(61, 83, 115);"
  } 
  function updateButtonCSS2(){
    mountain2btn.style="background-color: rgba(182,196,218);"
    mountain1btn.style="background-color: rgb(61, 83, 115);"
  } 

function showMountain1(){
updateButtonCSS1();
displayContainerEle.innerHTML=`<img class="schedule-img" src="./Images/Mountain1.jpg"> 
<div class="schedule-container">         <!-- schedule white box-->
    <div class="schedule-title">SCHEDULE</div>
    <div class="schedule-table">        <!--flexbox table for itenary-->
      <div class="schedule-table-row">  <!--flexbox table row-->
        <div>25 Nov 2016</div>
        <div>Vestibulum viverra</div>
      </div>
      <div class="schedule-table-row">  <!--flexbox table row-->
        <div>28 Nov 2024</div>
        <div>Vestibulum viverra</div>
      </div>
      <div class="schedule-table-row">  <!--flexbox table row-->
        <div>10 Dec 2024</div>
        <div>Vestibulum viverra</div>
      </div>
      <div class="schedule-table-row">  <!--flexbox table row-->
        <div>1 Jan 2024</div>
        <div>Vestibulum viverra</div>
      </div>
    </div>
</div>`;

}

function showMountain2(){
  updateButtonCSS2();
  displayContainerEle.innerHTML=`<img class="schedule-img" src="./Images/Mountain2.jpg"> 
  <div class="schedule-container">         <!-- schedule white box-->
      <div class="schedule-title">SCHEDULE</div>
      <div class="schedule-table">        <!--flexbox table for itenary-->
        <div class="schedule-table-row">  <!--flexbox table row-->
          <div>25 Jan 2016</div>
          <div>Vestibulum viverra2</div>
        </div>
        <div class="schedule-table-row">  <!--flexbox table row-->
          <div>28 Jan 2024</div>
          <div>Vestibulum viverra2</div>
        </div>
        <div class="schedule-table-row">  <!--flexbox table row-->
          <div>10 Feb 2024</div>
          <div>Vestibulum viverra2</div>
        </div>
        <div class="schedule-table-row">  <!--flexbox table row-->
          <div>1 March 2024</div>
          <div>Vestibulum viverra2</div>
        </div>
      </div>
  </div>`;
  
  }