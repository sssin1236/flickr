
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
    console.log(data);
})
.error(function(err){
    console.err("데이터를 호출하는 데 실패했습니다.");
})