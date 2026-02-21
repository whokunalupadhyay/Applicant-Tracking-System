from dotenv import load_dotenv
import streamlit as st
import os
import pdfplumber
from google import genai

# ---------------- LOAD ENV ----------------
load_dotenv()

# ---------------- CREATE CLIENT ----------------
client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

# ---------------- GEMINI FUNCTION ----------------
def get_gemini_response(job_desc, resume_text, prompt):
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"""
            Job Description:
            {job_desc}

            Resume:
            {resume_text}

            Instructions:
            {prompt}
            """
        )
        return response.text
    except Exception as e:
        return f"Error generating response: {e}"

# ---------------- PDF READER ----------------
def extract_text_from_pdf(uploaded_file):
    text = ""
    with pdfplumber.open(uploaded_file) as pdf:
        for page in pdf.pages:
            text += page.extract_text()
    return text

# ---------------- STREAMLIT UI ----------------
st.set_page_config(page_title="ATS Resume Expert")
st.title("ATS Resume Tracking System")

job_description = st.text_area("Paste Job Description Here")

uploaded_file = st.file_uploader("Upload your resume (PDF only)", type=["pdf"])

if uploaded_file:
    st.success("Resume Uploaded Successfully ✅")

submit1 = st.button("Tell Me About the Resume")
submit2 = st.button("Percentage Match")

prompt1 = """
You are an experienced HR manager.
Evaluate the resume against the job description.
Highlight strengths and weaknesses.
"""

prompt2 = """
You are an ATS scanner.
Provide:
1. Percentage match
2. Missing keywords
3. Final recommendation
"""

if submit1 and uploaded_file:
    resume_text = extract_text_from_pdf(uploaded_file)
    result = get_gemini_response(job_description, resume_text, prompt1)
    st.subheader("Resume Evaluation:")
    st.write(result)

if submit2 and uploaded_file:
    resume_text = extract_text_from_pdf(uploaded_file)
    result = get_gemini_response(job_description, resume_text, prompt2)
    st.subheader("ATS Match Result:")
    st.write(result)
