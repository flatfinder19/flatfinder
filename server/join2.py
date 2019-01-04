import json

with open("file2.json") as f1:
    data = json.load(f1)

with open("file.json") as f2:
    data += json.load(f2)


with open("file3.json", "w") as f:
    json.dump(data, f)
