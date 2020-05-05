class Solution:
    def canThreePartsEqualSum(self, A: List[int]) -> bool:
        sumArr = sum(A)
        sumTemp = 0
        count = 0
        for item in A:
            sumTemp += item
            if sumTemp == sumArr//3:
                count = count + 1
                sumTemp = 0
            if count == 3:
                return True
        return False
