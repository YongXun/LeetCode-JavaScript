var numPairsDivisibleBy60 = function(time) {
			    let [res,head,tail] = [0,0,1];
				while(head<=time.length-2){
					while(tail<=time.length-1){
						if((time[head]+time[tail])%60 == 0){
							res = res + 1;
						}
						tail = tail + 1;
					}
					head = head + 1;
					tail = head + 1;
				}
				return res;
			};
