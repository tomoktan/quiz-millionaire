interface PhoneHintProps {
  hint: string;
  onClose: () => void;
}

function PhoneHint({ hint, onClose }: PhoneHintProps) {
  return (
    <div className="phone-overlay" onClick={onClose}>
      <div className="phone-hint" onClick={(e) => e.stopPropagation()}>
        <div className="phone-header">
          <span className="phone-icon">📞</span>
          <span>テレフォン</span>
        </div>
        <div className="phone-bubble">
          <p>{hint}</p>
        </div>
        <button className="phone-close" onClick={onClose}>
          閉じる
        </button>
      </div>
    </div>
  );
}

export default PhoneHint;
