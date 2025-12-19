import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolio";
import { Download } from "lucide-react";
import { useRef } from "react";

const ResumeExport = () => {
    const resumeRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    const handleExport = async () => {
        const html2pdf = (await import("html2pdf.js")).default;

        if (resumeRef.current) {
            const opt = {
                margin: [0.5, 0.5, 0.5, 0.5],
                filename: `${portfolioData().information.name.replace(
                    /\s+/g,
                    "_"
                )}_Resume.pdf`,
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: {
                    unit: "in",
                    format: "letter",
                    orientation: "portrait",
                },
            };

            html2pdf().set(opt).from(resumeRef.current).save();
        }
    };

    const { information, skill, experience, education } = portfolioData();

    return (
        <>
            <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium text-sm border border-border"
            >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">{t("resume.export")}</span>
            </button>

            {/* Hidden Harvard-style Resume Template */}
            <div className="fixed -left-[9999px] top-0">
                <div
                    ref={resumeRef}
                    style={{
                        width: "8.5in",
                        minHeight: "11in",
                        padding: "0.5in",
                        fontFamily: "Times New Roman, serif",
                        fontSize: "11pt",
                        lineHeight: "1.3",
                        color: "#000",
                        backgroundColor: "#fff",
                    }}
                >
                    {/* Header - Name centered */}
                    <div style={{ textAlign: "center", marginBottom: "8px" }}>
                        <h1
                            style={{
                                fontSize: "18pt",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                letterSpacing: "2px",
                                margin: 0,
                            }}
                        >
                            {information.name}
                        </h1>
                    </div>

                    {/* Contact Info - Single line centered */}
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "10pt",
                            marginBottom: "16px",
                            borderBottom: "1px solid #000",
                            paddingBottom: "8px",
                        }}
                    >
                        {information.address} | {information.phoneNumber} |{" "}
                        <a
                            href={information.linkedIn}
                            style={{ color: "#000" }}
                        >
                            LinkedIn
                        </a>{" "}
                        |{" "}
                        <a href={information.github} style={{ color: "#000" }}>
                            GitHub
                        </a>
                    </div>

                    {/* Summary Section */}
                    <div style={{ marginBottom: "14px" }}>
                        <h2
                            style={{
                                fontSize: "11pt",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                borderBottom: "1px solid #000",
                                marginBottom: "6px",
                                paddingBottom: "2px",
                            }}
                        >
                            Summary
                        </h2>
                        <p style={{ margin: 0, textAlign: "justify" }}>
                            {information.professionalSummary}
                        </p>
                    </div>

                    {/* Experience Section */}
                    <div style={{ marginBottom: "14px" }}>
                        <h2
                            style={{
                                fontSize: "11pt",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                borderBottom: "1px solid #000",
                                marginBottom: "6px",
                                paddingBottom: "2px",
                            }}
                        >
                            Experience
                        </h2>
                        {experience.map((exp, index) => (
                            <div key={index} style={{ marginBottom: "10px" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-start",
                                    }}
                                >
                                    <div>
                                        <strong>{exp.company.name}</strong> –{" "}
                                        {exp.company.Place.join(", ")}
                                    </div>
                                    <div style={{ fontStyle: "italic" }}>
                                        {exp.company.FromTo}
                                    </div>
                                </div>
                                <div
                                    style={{
                                        fontStyle: "italic",
                                        marginBottom: "4px",
                                    }}
                                >
                                    {exp.role}
                                </div>
                                <ul
                                    style={{
                                        margin: "4px 0 0 0",
                                        paddingLeft: "20px",
                                    }}
                                >
                                    {exp.project.description
                                        .split(". ")
                                        .filter(Boolean)
                                        .map((point, i) => (
                                            <li
                                                key={i}
                                                style={{
                                                    marginBottom: "2px",
                                                    textAlign: "justify",
                                                }}
                                            >
                                                {point.endsWith(".")
                                                    ? point
                                                    : `${point}.`}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Education Section */}
                    <div style={{ marginBottom: "14px" }}>
                        <h2
                            style={{
                                fontSize: "11pt",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                borderBottom: "1px solid #000",
                                marginBottom: "6px",
                                paddingBottom: "2px",
                            }}
                        >
                            Education
                        </h2>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <strong>{education.Name}</strong>
                            <span>{education.Graduated}</span>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div style={{ marginBottom: "14px" }}>
                        <h2
                            style={{
                                fontSize: "11pt",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                borderBottom: "1px solid #000",
                                marginBottom: "6px",
                                paddingBottom: "2px",
                            }}
                        >
                            Technical Skills
                        </h2>
                        <div style={{ marginBottom: "4px" }}>
                            <strong>Backend:</strong>{" "}
                            {skill.techStack.backend.join(", ")}
                        </div>
                        <div style={{ marginBottom: "4px" }}>
                            <strong>Frontend:</strong>{" "}
                            {skill.techStack.frontend.join(", ")}
                        </div>
                        <div style={{ marginBottom: "4px" }}>
                            <strong>Database:</strong>{" "}
                            {skill.techStack.database.join(", ")}
                        </div>
                        <div style={{ marginBottom: "4px" }}>
                            <strong>DevOps:</strong>{" "}
                            {skill.techStack.devops.join(", ")}
                        </div>
                        <div style={{ marginBottom: "4px" }}>
                            <strong>Version Control:</strong>{" "}
                            {skill.techStack.versionControl.join(", ")}
                        </div>
                    </div>

                    {/* Concepts Section */}
                    <div style={{ marginBottom: "14px" }}>
                        <h2
                            style={{
                                fontSize: "11pt",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                borderBottom: "1px solid #000",
                                marginBottom: "6px",
                                paddingBottom: "2px",
                            }}
                        >
                            Additional Skills
                        </h2>
                        <div style={{ marginBottom: "4px" }}>
                            <strong>Design Patterns:</strong>{" "}
                            {skill.Concept.designPattern.join(", ")}
                        </div>
                        <div style={{ marginBottom: "4px" }}>
                            <strong>Architecture:</strong>{" "}
                            {skill.Concept.Architecture.join(", ")}
                        </div>
                        <div style={{ marginBottom: "4px" }}>
                            <strong>Principles:</strong>{" "}
                            {skill.Concept.OOP.join(", ")}
                        </div>
                    </div>

                    {/* Languages Section */}
                    <div>
                        <h2
                            style={{
                                fontSize: "11pt",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                borderBottom: "1px solid #000",
                                marginBottom: "6px",
                                paddingBottom: "2px",
                            }}
                        >
                            Languages
                        </h2>
                        {skill.language.map((lang, index) => (
                            <div key={index} style={{ marginBottom: "2px" }}>
                                <strong>{lang.Name}:</strong> {lang.Description}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeExport;
