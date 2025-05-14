// Code Editor data
const activeTab = ref('html');
const setActiveTab = (tab) => {
    activeTab.value = tab;
    updateCode();
};

const activeTabName = computed(() => {
    const names = {
        html: 'HTML',
        css: 'CSS',
        js: 'JavaScript',
        vue: 'Vue.js',
        react: 'React',
        python: 'Python'
    };
    return names[activeTab.value];
});

const activeTabIcon = computed(() => {
    const icons = {
        html: 'fab fa-html5',
        css: 'fab fa-css3-alt',
        js: 'fab fa-js-square',
        vue: 'fab fa-vuejs',
        react: 'fab fa-react',
        python: 'fab fa-python'
    };
    return icons[activeTab.value];
});

const codeSamples = {
    html: `<div id="app">
    <h1>Hello World!</h1>
    <p>Welcome to Zall Web Solutions</p>
    <button @click="showAlert">Click Me</button>
</div>`,
    css: `body {
    font-family: 'Poppins', sans-serif;
    background-color: #1a1a1a;
    color: #f5f5f5;
}

#app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

h1 {
    color: #e63946;
    font-size: 2.5rem;
}`,
    js: `// Simple alert function
function showAlert() {
    alert('Welcome to Zall Web Solutions!');
}

// Event listener for button
document.querySelector('button').addEventListener('click', showAlert);`,
    vue: `// Vue.js Example
const { createApp, ref } = Vue;

createApp({
    setup() {
        const message = ref('Hello Vue!');
        const showAlert = () => {
            alert(message.value);
        };
        
        return {
            message,
            showAlert
        };
    }
}).mount('#app');`,
    react: `// React Example
const { useState } = React;

function App() {
    const [message, setMessage] = useState('Hello React!');
    
    const showAlert = () => {
        alert(message);
    };
    
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={showAlert}>Click Me</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));`,
    python: `# Python Example
def greet(name):
    return f"Hello {name}, welcome to Zall Web Solutions!"

print(greet("World"))

# Calculate factorial
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))`
};

const currentCode = ref(codeSamples.html);
const updateCode = () => {
    currentCode.value = codeSamples[activeTab.value];
};

const lineNumbers = computed(() => {
    const lines = currentCode.value.split('\n');
    return Array.from({ length: lines.length }, (_, i) => i + 1);
});

const formattedCode = computed(() => {
    // Simple syntax highlighting (for demo purposes)
    let code = currentCode.value;
    
    if (activeTab.value === 'html') {
        code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        code = code.replace(/(&lt;\/?[a-z][a-z0-9]*)/gi, '<span style="color: #e63946;">$1</span>');
        code = code.replace(/([a-z-]+)=/gi, '<span style="color: #457b9d;">$1</span>=');
    } else if (activeTab.value === 'css') {
        code = code.replace(/([a-z-]+):/gi, '<span style="color: #457b9d;">$1</span>:');
        code = code.replace(/#[a-f0-9]{3,6}/gi, '<span style="color: #e9c46a;">$&</span>');
    } else if (activeTab.value === 'js' || activeTab.value === 'vue' || activeTab.value === 'react') {
        code = code.replace(/(function|const|let|var|return|if|else|for|while)/g, '<span style="color: #e63946;">$1</span>');
        code = code.replace(/("[^"]*"|'[^']*')/g, '<span style="color: #2a9d8f;">$1</span>');
    } else if (activeTab.value === 'python') {
        code = code.replace(/(def|return|if|else|print)/g, '<span style="color: #e63946;">$1</span>');
        code = code.replace(/("[^"]*"|'[^']*')/g, '<span style="color: #2a9d8f;">$1</span>');
        code = code.replace(/#.*$/gm, '<span style="color: #6c757d;">$&</span>');
    }
    
    return code;
});

const output = ref('');
const runCode = async () => {
    output.value = 'Running code...';
    
    try {
        if (activeTab.value === 'python') {
            // Initialize Pyodide if not already loaded
            if (!window.pyodide) {
                output.value = 'Loading Python runtime... (may take a moment)';
                window.pyodide = await loadPyodide({
                    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/"
                });
            }
            
            const result = await window.pyodide.runPythonAsync(currentCode.value);
            output.value = result !== undefined ? String(result) : 'Code executed successfully (no output)';
        } else {
            // For other languages, we'll just show a demo output
            const demoOutputs = {
                html: 'HTML code cannot be executed directly in this editor.',
                css: 'CSS code cannot be executed directly in this editor.',
                js: 'Hello World!\n(Alert would show in a real environment)',
                vue: 'Vue app would be mounted in a real environment',
                react: 'React app would be rendered in a real environment'
            };
            
            output.value = demoOutputs[activeTab.value];
        }
    } catch (error) {
        output.value = `Error: ${error.message}`;
    }
};

// Make code editor functions available globally
window.codeEditorData = {
    activeTab,
    setActiveTab,
    activeTabName,
    activeTabIcon,
    currentCode,
    updateCode,
    lineNumbers,
    formattedCode,
    output,
    runCode
};
