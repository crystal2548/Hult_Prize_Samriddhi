let toastContainer = null;

function getContainer() {
  if (typeof document === "undefined") return null;
  if (toastContainer) return toastContainer;
  toastContainer = document.createElement("div");
  toastContainer.id = "custom-toast-container";
  toastContainer.style.cssText = "position: fixed; top: 24px; right: 24px; z-index: 9999; display: flex; flex-direction: column; gap: 10px;";
  document.body.appendChild(toastContainer);
  return toastContainer;
}

function showToast(content, type, duration = 3000) {
  const container = getContainer();
  if (!container) return null;

  let text = typeof content === "object" ? content.content : content;
  const toast = document.createElement("div");

  toast.style.cssText = `
    padding: 12px 20px;
    border-radius: 8px;
    background: rgba(20, 20, 28, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateY(-20px);
    opacity: 0;
    min-width: 250px;
  `;

  let icon = "";
  if (type === "success") {
    toast.style.borderLeft = "4px solid #10b981";
    icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "error") {
    toast.style.borderLeft = "4px solid #ef4444";
    icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
  } else if (type === "warning") {
    toast.style.borderLeft = "4px solid #f59e0b";
    icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
  } else if (type === "loading") {
    toast.style.borderLeft = "4px solid #ec2088";
    // Inline keyframe spinner animation
    icon = `
      <svg class="custom-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec2088" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke="rgba(236,32,136,0.15)"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke="#ec2088"></path>
      </svg>
      <style>
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      </style>
    `;
  } else {
    toast.style.borderLeft = "4px solid #ec2088";
    icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ec2088" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `${icon} <span style="font-family: system-ui, -apple-system, sans-serif;">${text}</span>`;
  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
  });

  if (duration > 0) {
    setTimeout(() => {
      toast.style.transform = "translateY(-10px)";
      toast.style.opacity = "0";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, duration);
  }

  return toast;
}

export const message = {
  success: (content) => showToast(content, "success"),
  error: (content) => showToast(content, "error"),
  warning: (content) => showToast(content, "warning"),
  info: (content) => showToast(content, "info"),
  loading: (content) => {
    const toast = showToast(content, "loading", 0);
    return () => {
      if (toast) {
        toast.style.transform = "translateY(-10px)";
        toast.style.opacity = "0";
        setTimeout(() => {
          toast.remove();
        }, 300);
      }
    };
  }
};
