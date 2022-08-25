const src1=[{
    "Player": "Sachin Tendulkar",
    "Team": "India",
    "Role": "Batsman",
    "Title": "Master Blaster",
    "Highest ICC Ranking": 1
},
{
    "Player": "Virat Kohli",
    "Team": "India",
    "Role": "Batsman",
    "Highest ICC Ranking": 1
},
{
    "Player": "Michael Clarke",
    "Team": "Australia",
    "Role": "Batsman",
    "Highest ICC Ranking": 5
}
]

const src2=[{
    "Player": "Steve Smith",
    "Team": "Australia",
    "Role": "Batsman",
    "IPL Teams": ["Rajasthan Royals", "Pune Warriors India"]
},
{
    "Player": "Mahendra Dhoni",
    "Team": "India",
    "Role": "Wicket Keeper",
    "Title": "Captain Cool",
    "IPL Teams": ["Chennai Super Kings", "Pune Warriors India"]
},
{
    "Player": "Sachin Tendulkar",
    "Team": "India",
    "Role": "Batsman",
    "IPL Teams": ["Mumbai Indians"]
},
{
    "Player": "Lasith Malinga",
    "Team": "Sri Lanka",
    "Role": "Bowler",
    "IPL Teams": ["Mumbai Indians"]
},
{
    "Player": "Virat Kohli",
    "Team": "India",
    "Role": "Batsman",
    "IPL Teams": ["Royal Challengers Banglore"]
}
]
const src=[...src1,...src2]
var i = 0
var res={}
function mergeUniquely(i){
    result={}
    //console.log(src[i])
    Object.keys(src[i]).forEach(e=>{
        result[e]=src[i][e]
    })
   res[src[i]["Player"]]={...res[src[i]["Player"]],...result};
    if(i<src.length-1){
        mergeUniquely(i+1)
    }
    else{
        console.log(Object.values(res))
    }

}



mergeUniquely(i)

