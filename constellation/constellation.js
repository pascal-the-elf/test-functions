function constellation(mon, day, suffix="座") {
    var s = "魔羯水瓶雙魚牡羊金牛雙子巨蟹獅子處女天秤天蠍射手魔羯";
    var d = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    var i = mon * 2 - (day < d[mon - 1] ? 2 : 0);
    return s.substring(i, i + 2) + suffix;
}
console.log("日期 -> 星座\n用法：constellation(月, 日, 後綴=\"座\")\n範例：\nconstellation(12, 27) 會回傳 "+constellation(12, 27)+"constellation(12, 27, \"女孩\") 會回傳 "+constellation(12, 27, "女孩"));
