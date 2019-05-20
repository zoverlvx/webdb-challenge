curl -d '{"project_id": '$1', "description": "'"$2"'", "notes": "'"$3"'"}' -H "Content-Type: application/json" -X POST "https://lambda-school-2-zoverlvx.c9users.io/api/actions"
