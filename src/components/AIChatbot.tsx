import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Calendar,
  Compass,
  MapPin,
  Phone,
  Tag,
  Maximize2,
  Minimize2,
  RefreshCw,
} from 'lucide-react';
import { PageId, Language } from '../types';
import { aiAssistantService, ChatMessage } from '../services/aiAssistant';
import { TRANSLATIONS } from '../data/translations';

interface AIChatbotProps {
  onNavigate: (page: PageId, param?: string) => void;
  language: Language;
}

export const AIChatbot: React.FC<AIChatbotProps> = ({ onNavigate, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const t = TRANSLATIONS[language];
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialGreeting: ChatMessage = {
    id: 'msg-0',
    sender: 'assistant',
    text: t.chatGreeting,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);

  // Update greeting if language toggles and chat was pristine
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'msg-0') {
        return [
          {
            ...prev[0],
            text: t.chatGreeting,
          },
        ];
      }
      return prev;
    });
  }, [language, t.chatGreeting]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate natural AI response delay
    try {
      const response = await aiAssistantService.generateResponse(query, language);
      setTimeout(() => {
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'assistant',
          text: response.text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          actionButtons: response.actionButtons,
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 500);
    } catch {
      setIsTyping(false);
    }
  };

  const handleActionClick = (btn: NonNullable<ChatMessage['actionButtons']>[number]) => {
    if (btn.actionType === 'navigate') {
      onNavigate(btn.target as PageId);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    } else if (btn.actionType === 'call') {
      window.location.href = `tel:${btn.target}`;
    } else if (btn.actionType === 'maps') {
      window.open(btn.target, '_blank', 'noopener,noreferrer');
    } else if (btn.actionType === 'preset') {
      handleSendMessage(btn.target);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: 'assistant',
        text: t.chatGreeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center bg-[#202025] hover:bg-[#2B2A31] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl border border-[#C5A059]/40 hover:border-[#C5A059] transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            aria-label="Open Darin Beauty Assistant"
          >
            {/* Pulsing ring */}
            <span className="absolute -inset-0.5 rounded-full bg-[#C5A059]/30 blur-xs group-hover:bg-[#C5A059]/50 animate-pulse pointer-events-none" />

            <div className="relative flex items-center space-x-2.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#DFCA9B] flex items-center justify-center text-[#202025] shadow-xs">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="hidden sm:flex flex-col items-start text-left">
                <span className="text-xs font-semibold tracking-wider text-[#FAF8F5]">
                  {t.chatAssistantTitle}
                </span>
                <span className="text-[10px] text-[#C5A059] tracking-wider uppercase">
                  {t.chatOnlineBadge}
                </span>
              </div>
            </div>

            {/* Notification unread badge */}
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#C5A059] border-2 border-white rounded-full animate-bounce" />
            )}
          </button>
        </div>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ${
            isExpanded
              ? 'inset-3 sm:inset-6 md:inset-10 lg:inset-x-auto lg:right-6 lg:bottom-6 lg:w-[540px] lg:h-[680px]'
              : 'bottom-20 lg:bottom-6 right-3 sm:right-6 w-[calc(100vw-24px)] sm:w-[400px] h-[520px] sm:h-[580px] max-h-[85vh]'
          }`}
        >
          <div className="flex flex-col h-full bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#EAE1D6] overflow-hidden animate-fade-in-soft">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#202025] via-[#2A2930] to-[#1E1D22] text-[#FAF8F5] p-4 flex items-center justify-between border-b border-[#3D3A44]">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C5A059] to-[#DFCA9B] flex items-center justify-center text-[#202025] shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold tracking-wider text-white">
                    {t.chatAssistantTitle}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-[10px] text-[#C5A059]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t.chatOnlineBadge}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 text-[#B3AFBC] hover:text-white rounded-lg transition-colors"
                  aria-label="Reset chat"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  title={isExpanded ? 'Collapse' : 'Expand'}
                  className="hidden sm:block p-1.5 text-[#B3AFBC] hover:text-white rounded-lg transition-colors"
                  aria-label={isExpanded ? 'Collapse window' : 'Expand window'}
                >
                  {isExpanded ? (
                    <Minimize2 className="w-3.5 h-3.5" />
                  ) : (
                    <Maximize2 className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-[#B3AFBC] hover:text-white rounded-lg transition-colors"
                  aria-label="Close assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="bg-[#F4ECE4] px-3 py-2 border-b border-[#EAE1D6] flex items-center space-x-1.5 overflow-x-auto no-scrollbar text-xs">
              <span className="text-[11px] font-semibold text-[#7C7782] shrink-0">
                {t.chatQuickActions}
              </span>
              <button
                onClick={() => handleSendMessage(language === 'th' ? 'มีบริการอะไรบ้าง' : 'Explore services')}
                className="shrink-0 px-2.5 py-1 rounded-full bg-white text-[#3D3B42] hover:bg-[#FAF8F5] border border-[#E0D5C7] transition-colors flex items-center space-x-1"
              >
                <Compass className="w-3 h-3 text-[#C5A059]" />
                <span>{language === 'th' ? 'บริการ' : 'Services'}</span>
              </button>
              <button
                onClick={() => handleSendMessage(language === 'th' ? 'จองคิวนัดหมาย' : 'Book an appointment')}
                className="shrink-0 px-2.5 py-1 rounded-full bg-white text-[#3D3B42] hover:bg-[#FAF8F5] border border-[#E0D5C7] transition-colors flex items-center space-x-1"
              >
                <Calendar className="w-3 h-3 text-[#C5A059]" />
                <span>{language === 'th' ? 'จองคิว' : 'Booking'}</span>
              </button>
              <button
                onClick={() => handleSendMessage(language === 'th' ? 'ร้านตั้งอยู่ที่ไหน' : 'Where are you located?')}
                className="shrink-0 px-2.5 py-1 rounded-full bg-white text-[#3D3B42] hover:bg-[#FAF8F5] border border-[#E0D5C7] transition-colors flex items-center space-x-1"
              >
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>{language === 'th' ? 'พิกัดร้าน' : 'Location'}</span>
              </button>
              <button
                onClick={() => handleSendMessage(language === 'th' ? 'เบอร์ติดต่อร้าน' : 'Contact Darin Beauty')}
                className="shrink-0 px-2.5 py-1 rounded-full bg-white text-[#3D3B42] hover:bg-[#FAF8F5] border border-[#E0D5C7] transition-colors flex items-center space-x-1"
              >
                <Phone className="w-3 h-3 text-[#C5A059]" />
                <span>{language === 'th' ? 'ติดต่อ' : 'Contact'}</span>
              </button>
              <button
                onClick={() => handleSendMessage(language === 'th' ? 'โปรโมชั่นปัจจุบัน' : 'Current promotions')}
                className="shrink-0 px-2.5 py-1 rounded-full bg-white text-[#3D3B42] hover:bg-[#FAF8F5] border border-[#E0D5C7] transition-colors flex items-center space-x-1"
              >
                <Tag className="w-3 h-3 text-[#C5A059]" />
                <span>{language === 'th' ? 'โปรโมชั่น' : 'Offers'}</span>
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#FAF8F5]">
              {messages.map((msg) => {
                const isBot = msg.sender === 'assistant';
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                        isBot
                          ? 'bg-white text-[#222126] border border-[#EAE1D6] shadow-2xs rounded-tl-xs'
                          : 'bg-gradient-to-r from-[#C5A059] to-[#A47D34] text-white rounded-tr-xs shadow-xs'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Bot Action Buttons */}
                    {isBot && msg.actionButtons && msg.actionButtons.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                        {msg.actionButtons.map((action, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleActionClick(action)}
                            className="inline-flex items-center space-x-1 text-xs px-2.5 py-1 rounded-full bg-[#F4ECE4] text-[#202025] hover:bg-[#C5A059] hover:text-white border border-[#DFD3C3] font-medium transition-colors"
                          >
                            <span>{action.label}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="text-[9px] text-[#918C99] mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center space-x-1.5 bg-white border border-[#EAE1D6] rounded-2xl px-4 py-2.5 w-fit rounded-tl-xs shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-white border-t border-[#EAE1D6]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={t.chatPlaceholder}
                  className="flex-1 bg-[#FAF8F5] border border-[#E5DCD1] focus:border-[#C5A059] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#202025] placeholder-[#918C99] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isTyping}
                  className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-[#202025] text-white hover:bg-[#C5A059] disabled:opacity-40 disabled:hover:bg-[#202025] transition-colors flex items-center justify-center shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-1.5 text-center text-[9px] text-[#A39EA9]">
                Darin Beauty Concierge • Dedicated Bangkok Salon & Spa Care
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
