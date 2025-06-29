module.exports=function(temp,data){
    let x = temp;
    x = x.replace('{{%TITLE%}}', data.name);
    x = x.replace('{{%NAME%}}', data.name);
    x = x.replace('{{%IMAGE%}}',data.image_url);
    x = x.replace('{{RATING}}',data.rating);
    x = x.replace('{{%DESC%}}',data.description);
    x = x.replace('{{%ID%}}',data.id);

    return x;
}