"use client";
"use liberary";

import { useState, useEffect } from 'react'
import { Folder, File, Terminal, User, Code, Bot, ChevronRight, X, ExternalLink, Github } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer, faArrowPointer, faICursor } from '@fortawesome/free-solid-svg-icons'
import { faPython, faJs, faReact } from '@fortawesome/free-brands-svg-icons' 
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faHandPointer, faArrowPointer, faICursor, faPython, faJs, faReact)

export default function Component() {
  const [activeTab, setActiveTab] = useState('about.py')
  const [terminalOpen, setTerminalOpen] = useState(true)
  const [loading, setLoading] = useState(true)
  const [loadingText, setLoadingText] = useState('')
  const [terminalText, setTerminalText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const text = "Abdulaziz dev..."
    let forward = true
    let i = 0
    const typingEffect = setInterval(() => {
      if (forward) {
        if (i < text.length) {
          setLoadingText(prev => prev + text.charAt(i))
          i++
        } else {
          forward = false
        }
      } else {
        if (i > 0) {
          setLoadingText(prev => prev.slice(0, -1))
          i--
        } else {
          forward = true
        }
      }
    }, 100)

    setTimeout(() => {
      clearInterval(typingEffect)
      setLoading(false)
    }, 5000)

    return () => clearInterval(typingEffect)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const files = [
    { 
      name: 'about.py', 
      icon: faPython,
      content: `def introduce():
    name = "Abdulaziz Hamidjonov"
    role = "Full Stack Developer & Telegram Bot Maker"
    skills = ["Python", "JavaScript", "React", "Node.js", "SQL", "Telegram Bot API"]
    print(f"Hello! I'm {name}, a {role}.")
    print(f"My skills include: {', '.join(skills)}")
    print("I'm passionate about creating efficient and innovative solutions.")

introduce()`,
      output: `Hello! I'm Abdulaziz Hamidjonov, a Full Stack Developer & Telegram Bot Maker.
My skills include: Python, JavaScript, React, Node.js, SQL, Telegram Bot API
I'm passionate about creating efficient and innovative solutions.`
    },
    { 
      name: 'skills.js', 
      icon: faJs,
      content: `const skills = [
  'Python', 'JavaScript', 'React', 
  'Node.js', 'SQL', 'Telegram Bot API'
];

const projects = [
  'E-commerce Platform',
  'Chat Application',
  'Data Visualization Dashboard',
  'AI-powered Telegram Bot'
];

console.log('My skills:', skills.join(', '));
console.log('Recent projects:', projects.join(', '));`,
      output: `My skills: Python, JavaScript, React, Node.js, SQL, Telegram Bot API
Recent projects: E-commerce Platform, Chat Application, Data Visualization Dashboard, AI-powered Telegram Bot`
    },
    { 
      name: 'contact.jsx', 
      icon: faReact,
      content: `import React from 'react';

const ContactInfo = () => {
  const contact = {
    telegram: '@ablaze_coder',
    bot: '@abdulaziz_contact_bot',
    github: 'https://github.com/abdulazizdev'
  };

  return (
    <div>
      <h2>Contact Information</h2>
      <ul>
        <li>Telegram: {contact.telegram}</li>
        <li>Contact Bot: {contact.bot}</li>
        <li>GitHub: {contact.github}</li>
      </ul>
    </div>
  );
};

export default ContactInfo;`,
      output: `Rendering ContactInfo component...

Contact Information
• Telegram: @ablaze_coder
• Contact Bot: @abdulaziz_contact_bot
• GitHub: https://github.com/abdulazizdev`
    },
  ]

  const runFile = (fileName) => {
    const file = files.find(f => f.name === fileName)
    if (file) {
      setTerminalText(`$ ${fileName === 'about.py' ? 'python' : fileName === 'skills.js' ? 'node' : 'npm run'} ${fileName}\n\n${file.output}\n\n`)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-green-500 font-mono">
        <div className="text-3xl">
          {loadingText}
          <span className={`inline-block w-3 h-6 ml-1 bg-green-500 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-300 font-mono">
      <style jsx global>{`
        body {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><text y="16" font-size="16">🖱️</text></svg>'), auto;
        }
        button, a {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><text y="16" font-size="16">👆</text></svg>'), pointer;
        }
        pre, code {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><text y="16" font-size="16">📝</text></svg>'), text;
        }
      `}</style>
      {/* Top Bar */}
      <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg p-2 flex items-center justify-between rounded-b-lg">
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm">Abdulaziz Hamidjonov - Full-Stack developer and Telegram bot maker</div>
        </div>  
        <div className="flex space-x-4">
          <a href="https://t.me/ablaze_coder" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
            <User size={18} />
          </a>
          <a href="https://t.me/abdulaziz_contact_bot" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors duration-200">
            <Bot size={18} />
          </a>
          <a href="https://github.com/abdulazizdev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors duration-200">
            <Github size={18} />
          </a>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 overflow-y-auto">
          <div className="mb-4">
            <Folder className="inline-block mr-2" size={18} />
            <span className="font-bold">Project</span>
          </div>
          {files.map((file) => (
            <div
              key={file.name}
              className={`flex items-center py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 ${
                activeTab === file.name 
                  ? 'bg-blue-600 bg-opacity-50 transform scale-105' 
                  : 'hover:bg-gray-700 hover:bg-opacity-50 hover:transform hover:scale-105'
              }`}
              onClick={() => {
                setActiveTab(file.name)
                runFile(file.name)
              }}
            >
              <FontAwesomeIcon icon={file.icon} className={`mr-3 transition-colors duration-200 ${activeTab === file.name ? 'text-yellow-400' : ''}`} />
              <span>{file.name}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 flex">
            {files.map((file) => (
              <div
                key={file.name}
                className={`px-4 py-2 mr-2 rounded-t-lg cursor-pointer transition-all duration-200 ${
                  activeTab === file.name 
                    ? 'bg-gray-900 bg-opacity-70 transform translate-y-1' 
                    : 'bg-gray-700 bg-opacity-50 hover:bg-opacity-70'
                }`}
                onClick={() => {
                  setActiveTab(file.name)
                  runFile(file.name)
                }}
              >
                {file.name}
              </div>
            ))}
          </div>
          <div className="flex-1 bg-gray-900 p-4 overflow-auto">
            <pre className="text-sm relative">
              <code className="block">
                {files.find(f => f.name === activeTab)?.content.split('\n').map((line, index) => (
                  <div key={index} className="flex">
                    <span className="inline-block w-8 text-right mr-4 text-gray-500">{index + 1}</span>
                    <span className="flex-1">{colorizeCode(line, activeTab)}</span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className={`bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg transition-all duration-300 ease-in-out ${terminalOpen ? 'h-1/3' : 'h-8'}`}>
        <div className="flex justify-between items-center px-4 py-1 bg-gray-900 bg-opacity-70">
          <div className="flex items-center">
            <Terminal className="mr-2" size={16} />
            <span>Terminal</span>
          </div>
          <button 
            onClick={() => setTerminalOpen(!terminalOpen)} 
            className="focus:outline-none transition-transform duration-200 hover:scale-110"
          >
            {terminalOpen ? <X size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>
        {terminalOpen && (
          <div className="p-4 h-full overflow-auto bg-gray-900 bg-opacity-50">
            <pre className="text-green-400 whitespace-pre-wrap text-sm">
              {colorizeTerminal(terminalText)}
              <span className={`inline-block w-2 h-4 ml-1 bg-cyan-500 ${showCursor ? 'opacity-100' : 'opacity-0'} animate-pulse`} style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
              }}></span>
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

function colorizeCode(line: string, fileType: string) {
  const keywords = {
    'py': ['def', 'print', 'return', 'import', 'from', 'as', 'if', 'else', 'elif', 'for', 'while', 'in', 'and', 'or', 'not', 'True', 'False', 'None'],
    'js': ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue', 'true', 'false', 'null', 'undefined'],
    'jsx': ['import', 'from', 'export', 'default', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue', 'true', 'false', 'null', 'undefined']
  }

  const stringRegex = /(["'])(?:(?=(\\?))\2.)*?\1/g;
  const commentRegex = /#.+|\/\/.+/g;
  const functionRegex = /\b\w+(?=\()/g;

  let coloredLine = line
    .replace(stringRegex, '<span class="text-yellow-300">$&</span>')
    .replace(commentRegex, '<span class="text-gray-500">$&</span>')
    .replace(functionRegex, '<span class="text-blue-300">$&</span>');

  const fileExtension = fileType.split('.').pop() as keyof typeof keywords;
  keywords[fileExtension]?.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    coloredLine = coloredLine.replace(regex, `<span class="text-pink-500">$&</span>`);
  });

  return <span dangerouslySetInnerHTML={{ __html: coloredLine }} />;
}

function colorizeTerminal(text: string) {
  const commandRegex = /^\$\s.+/gm;
  const outputRegex = /^(?!\$).+/gm;

  let coloredText = text
    .replace(commandRegex, '<span class="text-cyan-400">$&</span>')
    .replace(outputRegex, '<span class="text-yellow-200">$&</span>');

  return <span dangerouslySetInnerHTML={{ __html: coloredText }} />;
}