var longestCommonPrefix = function(strs) {
				//定义最终返回字符串
				let res = [];
				//将各个字符串切割成字符数组
				let strArr = [];
				for(let item of strs){strArr.push(item.split(""));}
				console.log(strArr);
				while(true){
					let word;
					try{word = strArr[0][0];}
					catch(error){res=res.join();return res;}
					for(let item in strArr){
						let foo = strArr[item].shift();
						if(foo!=word||foo==undefined){res = res.join("");return res;}
						else if(item == strArr.length-1){res.push(word);console.log(res)}
						else {continue;}
					}
				}
				res = res.join("");
				return res;
			};
