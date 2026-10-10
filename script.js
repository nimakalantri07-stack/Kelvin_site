const form=document.getElementById("bookingForm");
const year=document.getElementById("year");
year.textContent=new Date().getFullYear();

form.addEventListener("submit", e=>{
  e.preventDefault();
  const d=new FormData(form);
  const text =
`درخواست نصب کلوین
نام: ${d.get("name")}
شماره: ${d.get("phone")}
شهر: ${d.get("city")}
خدمت: ${d.get("service")}
تاریخ: ${d.get("date")||"تعیین نشده"}
ساعت: ${d.get("time")||"تعیین نشده"}
توضیحات: ${d.get("note")||"ندارد"}`;
  const wa="https://wa.me/989125427916?text="+encodeURIComponent(text);
  if(confirm("درخواست آماده شد. برای ارسال اطلاعات به کلوین، واتساپ باز شود؟")){
    window.open(wa,"_blank");
  } else {
    navigator.clipboard?.writeText(text);
    alert("متن درخواست کپی شد. می‌توانید آن را برای کلوین ارسال کنید.");
  }
});
