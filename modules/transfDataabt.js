module.exports = function(temp,data){

    let x = temp;
    x = x.replace('{{%NAME%}}',data.name);
    x = x.replace('{{%DESC%}}',data.description);
    x = x.replace('{{%DIRECTOR%}}',data.cast_and_crew.director);
    x = x.replace('{{%ACT1%}}',data.cast_and_crew.cast[0]);
    x = x.replace('{{%ACT2%}}',data.cast_and_crew.cast[1]);
    x = x.replace('{{%ACT3%}}',data.cast_and_crew.cast[2]);
    x = x.replace('{{%IMAGE%}}',data.post_url);

    return x;
}