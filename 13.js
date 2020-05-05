var canThreePartsEqualSum = function(A) {
				let sum = A.reduce((num1,num2)=>num1+num2);
				let count = 0; //记录有多少次达到sum/3
				let tempSum = 0;
				for(let item of A){
					tempSum += item;
					if(tempSum == sum/3){count++;tempSum=0;}
					if(count == 3){return true;}
				}
				return false;
			};
