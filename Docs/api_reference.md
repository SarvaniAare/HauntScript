
# 📘 HauntScript API Reference

## POST `/generate`

Generates a horror story using the provided inputs.

### Request Body (JSON)
```
{
  "character": "Emily",
  "situation": "hears whispers in the attic",
  "lines": 5
}
```

### Response (JSON)
```
{
  "story": "Emily stepped into the abandoned mansion..."
}
```

## Error Handling
- Returns `422` for invalid or missing fields
- Handles internal errors with clear messages
