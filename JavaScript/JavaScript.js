function randMeme() {

    var min = 0;
    var max = 30;
    var ranNum = Math.round(Math.random() * (max - min)) + min;

    var links = new Array();
    links[0] = "https://i.redd.it/ulaxuymarhi31.jpg";
    links[1] = "https://i.redd.it/ihjfq0hwclw31.png";
    links[2] = "https://i.redd.it/4rcajgx73dw31.png";
    links[3] = "https://i.redd.it/hiu1d77raxv31.png";
    links[4] = "https://i.redd.it/4a1fbo24ycu31.jpg";
    links[5] = "https://i.redd.it/s7nnhce7wyr31.jpg";
    links[6] = "https://i.redd.it/vo68146nxkm31.jpg";
    links[7] = "https://i.redd.it/ulaxuymarhi31.jpg";
    links[8] = "https://i.redd.it/jd25yqv8xsf31.jpg";
    links[9] = "https://data.whicdn.com/images/315704089/original.gif";
    links[10] = "https://i.redd.it/e25rcrvltmy31.png";
    links[11] = "https://i.redd.it/030yqqqlpn821.jpg";
    links[12] = "https://i.redd.it/ig5u8ke5qo421.png";
    links[13] = "https://i.redd.it/33zxh2st02b21.png";
    links[14] = "https://i.redd.it/mar8p5zhhm131.jpg";
    links[15] = "https://i.redd.it/c8cw76gmohy11.jpg";
    links[16] = "https://external-preview.redd.it/2htFTGm3vrPB41z1b_jHeZ122-lGhMK6aKphMGwShXA.jpg?auto=webp&s=69f82ac34b69da99e854c644ee84825cfdb25862";
    links[17] = "https://i.imgur.com/SAMw7Pw.jpg";
    links[18] = "https://i.redd.it/1c04384clp521.png";
    links[19] = "https://i.redd.it/42gyr1spwoq31.jpg";
    links[20] = "https://i.redd.it/v32pipwm7ui31.png";
    links[21] = "https://i.redd.it/v32pipwm7ui31.png";
    links[22] = "https://i.redd.it/gfkrcfstdjz31.jpg";
    links[23] = "https://i.redd.it/pn6292mmqsy31.jpg";
    links[24] = "https://i.redd.it/rgh6apoh0ky31.jpg";
    links[25] = "https://i.redd.it/bkgguc9fgny31.jpg";
    links[26] = "https://i.redd.it/2lm0kx6jyhy31.png";
    links[27] = "https://i.redd.it/sl2uwsr9h7z31.png";
    links[28] = "https://i.redd.it/31t0dmex2wy31.jpg";
    links[29] = "https://i.redd.it/t9nqf4enu5z31.jpg";
    links[30] = "https://i.redd.it/bcdxtnl3jfz31.png";

    window.open(links[ranNum],"meme");
}