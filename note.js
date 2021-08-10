
const title = document.getElementById('title')
const content = document.getElementById('content')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent=[]

function render(){
    let htmlStr=''
    var Today=new Date();
    let autoTime="日期: "+Today.getFullYear()+" / "+(Today.getMonth()+1)+" / "+Today.getDate()

    listContent.forEach(function(item,number){
        htmlStr = htmlStr+`
        <div class="py-1">
            <div class="card">
                <div class="card-header">#${item.title}</div>
                    <div class="card-body">
                      <p class="card-text">${item.content}</p>
                    </div>
                <div class="card-footer text-muted">${autoTime}</div>
            </div>
        </div>
      `
    })

    list.innerHTML = htmlStr
}

addedBtn.addEventListener('click',function(){

    listContent.unshift({
        title: title.value,
        content: content.value,
    })
    console.log(listContent);
    render()

})

deletedBtn.addEventListener('click',function(){
    listContent.pop()

    render()
    
})