
/*
사진경로
https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
https://live.staticflickr.com/7372/12502775644_acfd415fa7_w.jpg

데이터를 불러올 주소
https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value

일정기간 가장 인기있는 사진을 불러오는 메소드
https://www.flickr.com/services/rest/?method=flickr.interestingness.getList

내가 원하는 이미지 검색해서 
https://www.flickr.com/services/rest/?method=flickr.photos.search

// key :645bbdf320519f9a5473a288fc9f617a
*/

$.ajax({
    // url:"https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value",
    url:"https://www.flickr.com/services/rest/?method=flickr.photos.search",
    dataType:"json",
    data:{
        api_key:"645bbdf320519f9a5473a288fc9f617a",
        per_page:5,
        format:"json",
        nojsoncallback:1,
        privacy_filter: 5,
        tags:"landscape" //검색할 이미지 키워드 입력 - method가 photo.search일 때(다른 때에는 주석처리)
    }
})
.success(function(data){
    console.log(data.photos.photo);
    let items = data.photos.photo;

    $("#gallery").append(("<ul>"));

    $(items).each(function(index,data){

        //변수 text에 이미지 데이터의 title을 담음
        let text = data.title;
        //만약 해당 이미지 데이터에 제목 텍스트가 없다면
        if(!data.title){
            //변수 text에 임의의 텍스트를 저장하여 추후 발생할 수 있는 오류 방지
            text = "No description in this photo";
        }

        $("#gallery ul")
            .append(
                $("<li>")
                    .append(
                        $("<a>").attr({
                            href : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_b.jpg"
                        })
                        .append(
                            $("<img>").attr({
                                src : "https://live.staticflickr.com/"+data.server+"/"+data.id+"_"+data.secret+"_m.jpg"
                            })
                        )
                    )
                    .append(
                        $("<p>").text(text)
                    )
                    //이미지를 올린 사용자 프로필 이미지와 이름 출력
                    .append(
                        $("<div class='profile'>")
                            .append(
                                $("<img>").attr({
                                    src : "https://www.flickr.com/buddyicons/"+data.owner+".jpg"
                                }),
                                $("<span>").text(data.owner)
                            )
                    )
            )
    });
})
.error(function(err){
    console.err("데이터를 호출하는 데 실패했습니다.");
})