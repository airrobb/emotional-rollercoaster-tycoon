s="poop poop poop Query time: 71203"
regex="Query time: ([0-9]+)"
[[ $s =~ $regex ]]
echo "${BASH_REMATCH[1]}"