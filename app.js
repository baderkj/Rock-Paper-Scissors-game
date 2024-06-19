
const ruleButton=document.querySelector('.rules-btn');
const resultfocus=document.querySelector('.disable');
const choiceafter=document.querySelector('.choice');
const game=document.querySelector('.game');
const	result=document.querySelector('.results-result');
const	result1=document.querySelector('.results-result1');
const containerRule=document.querySelector('.rules-container');
const closeRule=document.querySelector('.close-btn');
const	resultAll=document.querySelector('.results');
const btnWin=document.querySelector('.btn-win');
const btnRepeat=document.querySelector('.btn-repeat');
const score=document.querySelector('.score-number');
const footer=document.querySelector('.footer');
let count=0;
score.innerHTML=count;
function repeatGame() {
	resultAll.style.display='none';
	game.style.display='grid';
	result1.style.display='none';
	btnWin.style.display='none';
	btnRepeat.style.display='none';
	footer.style.marginTop='0px';
}




function aiReact(type) {
	const randomNumber=Math.floor(Math.random() * 3) + 1;

	if(randomNumber==1 )
	{
		result1.innerHTML=` <button class="choice-btn disable" data-choice="paper " onfocus="" >
        <div class="choice paper">
          <img src="./images/icon-paper.svg" alt="Paper">
        </div>

      </button>`
	}
		if(randomNumber==2)
	{
		result1.innerHTML=` <button class="choice-btn disable" data-choice="rock " onfocus="" >
        <div class="choice rock">
          <img src="./images/icon-rock.svg" alt="rock">
        </div>

      </button>`
	}
		if(randomNumber==3)
	{
		result1.innerHTML=` <button class="choice-btn disable" data-choice="scissors " onfocus="" >
        <div class="choice scissors">
          <img src="./images/icon-scissors.svg" alt="scissors">
        </div>

      </button>`
	}


		if(randomNumber==1 &&type=="rock")
		{
			btnWin.innerHTML='you lose';
			count--;
		}
	else if(randomNumber==1 &&type=="scissors")
    {
		btnWin.innerHTML='you win ';
		count++;	
		}

	else if(randomNumber==2 &&type=="paper")
		{
			btnWin.innerHTML='you win';
			count++;
		}

	else if(randomNumber==2 &&type=="scissors")
{
			btnWin.innerHTML='you lose';
			count--;
		}

	else if(randomNumber==3 &&type=="rock")
		{
			btnWin.innerHTML='you win';
			count++;
		}

	else if(randomNumber==3 &&type=="paper")
{
btnWin.innerHTML='you lose';
count--;
}
else{
	btnWin.innerHTML='balanced'
}
	result1.style.display='block';
	
setTimeout(function function_name(argument) {
btnRepeat.style.display='block';
btnWin.style.display='block';	

},500)

setTimeout(function lay(argument) {
	score.innerHTML=count;
},800)



}




function showRules() {
	containerRule.style.opacity='1';
	containerRule.style.pointerEvents='visible';


}
function closeRules() {
	containerRule.style.pointerEvents='none';
	containerRule.style.opacity='0';
}


function resultShow(type) {
	footer.style.marginTop='140px';
	resultAll.style.display='flex';
	
	game.style.display='none';
	const inner=`
  <button class="choice-btn disable" data-choice="${type} " onfocus="" >
        <div class="choice ${type}">
          <img src="./images/icon-${type}.svg" alt="Rock">
        </div>

      </button>
`;
result.innerHTML=inner;

setTimeout(function () {
	aiReact(type);
},1000)
}
