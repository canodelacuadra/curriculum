#!/bin/bash

# OpenCode Hybrid Model Switcher
# Switch between local Ollama models and cloud Big Pickle

case "$1" in
    "local-codellama")
        echo "Switching to CodeLlama (Local)..."
        sed -i 's/"model": ".*"/"model": "ollama\/codellama:latest"/' ~/.config/opencode/opencode.json
        echo "✅ Now using: CodeLlama 7B (Local)"
        ;;
    "local-llama3")
        echo "Switching to Llama3 (Local)..."
        sed -i 's/"model": ".*"/"model": "ollama\/llama3:latest"/' ~/.config/opencode/opencode.json
        echo "✅ Now using: Llama 3 8B (Local)"
        ;;
    "cloud-big-pickle")
        echo "Switching to Big Pickle (Cloud)..."
        sed -i 's/"model": ".*"/"model": "big-pickle\/big-pickle"/' ~/.config/opencode/opencode.json
        echo "✅ Now using: Big Pickle (200K context)"
        ;;
    "status")
        echo "Current model:"
        grep '"model"' ~/.config/opencode/opencode.json | sed 's/.*"model": "\(.*\)".*/\1/'
        ;;
    "list")
        echo "Available models:"
        echo "  local-codellama    - CodeLlama 7B (Local, 3.8GB)"
        echo "  local-llama3       - Llama 3 8B (Local, 4.7GB)" 
        echo "  cloud-big-pickle  - Big Pickle (Cloud, 200K context)"
        ;;
    *)
        echo "OpenCode Model Switcher"
        echo ""
        echo "Usage: $0 [option]"
        echo ""
        echo "Options:"
        echo "  local-codellama    Switch to CodeLlama (Local)"
        echo "  local-llama3       Switch to Llama3 (Local)"
        echo "  cloud-big-pickle  Switch to Big Pickle (Cloud)"
        echo "  status             Show current model"
        echo "  list               List available models"
        echo ""
        echo "Examples:"
        echo "  $0 local-codellama    # Use local CodeLlama for coding"
        echo "  $0 cloud-big-pickle   # Use Big Pickle for large context"
        ;;
esac