import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminPage() {
    const [session, setSession] = useState<any>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const [projectName, setProjectName] = useState("");
    const [projectDesc, setProjectDesc] = useState("");
    const [projectImg, setProjectImg] = useState("");
    const [projectLink, setProjectLink] = useState("");

    useEffect(() => {
        if (!supabase) return;

        // Check active session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!supabase) {
            setErrorMsg("Supabase is not configured yet. Check your .env file.");
            return;
        }
        setLoading(true);
        setErrorMsg("");
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setErrorMsg(error.message);
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase?.auth.signOut();
    };

    const handleAddProject = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!supabase) return;

        setLoading(true);
        setErrorMsg("");
        setSuccessMsg("");

        const { error } = await supabase.from("projects").insert([
            {
                name: projectName,
                description: projectDesc,
                image: projectImg,
                link: projectLink,
            },
        ]);

        if (error) {
            setErrorMsg(error.message);
        } else {
            setSuccessMsg("Project securely added to your portfolio!");
            setProjectName("");
            setProjectDesc("");
            setProjectImg("");
            setProjectLink("");
        }
        setLoading(false);
    };

    if (!supabase) {
        return (
            <div className="min-h-screen bg-[#0a0705] text-white flex items-center justify-center p-6">
                <div className="bg-[#1a120e] p-8 rounded-xl border border-[#7B4B35]/40 max-w-lg text-center">
                    <h1 className="text-2xl font-bold text-[#D9A066] mb-4">Admin Setup Required</h1>
                    <p className="text-gray-300">
                        Welcome to your magical admin panel! To get started, you need to create a free Supabase project,
                        get your API keys, and place them in a <span className="font-mono bg-black/50 p-1">.env.local</span> file.
                    </p>
                </div>
            </div>
        );
    }

    if (!session) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0a0705] via-[#1a120e] to-[#261811] flex items-center justify-center font-poppins px-4">
                <form onSubmit={handleLogin} className="bg-[#1a120e]/80 p-8 rounded-2xl border border-[#7B4B35]/30 shadow-[0_0_40px_rgba(217,160,102,0.1)] backdrop-blur-xl w-full max-w-md">
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D9A066] to-[#C79A7D] mb-6 text-center">Admin Access</h1>

                    {errorMsg && <div className="bg-red-500/20 text-red-300 p-3 rounded-lg mb-4 text-sm text-center">{errorMsg}</div>}

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#0a0705] text-gray-200 border border-[#7B4B35]/40 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-[#D9A066] transition-colors"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-[#0a0705] text-gray-200 border border-[#7B4B35]/40 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-[#D9A066] transition-colors"
                        required
                    />

                    <button disabled={loading} className="w-full bg-gradient-to-r from-[#7B4B35] to-[#4E3629] text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all uppercase tracking-widest disabled:opacity-50">
                        {loading ? "Authenticating..." : "Login"}
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0705] via-[#1a120e] to-[#261811] text-gray-200 font-poppins p-6 sm:p-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-10 border-b border-[#7B4B35]/30 pb-6">
                    <h1 className="text-3xl font-bold text-[#D9A066]">Dashboard</h1>
                    <button onClick={handleLogout} className="text-sm font-semibold border border-[#7B4B35]/50 px-4 py-2 rounded-lg hover:bg-[#7B4B35]/20 transition-all text-[#C79A7D]">
                        Logout
                    </button>
                </div>

                <div className="bg-[#1a120e]/80 p-8 rounded-2xl border border-[#7B4B35]/30 shadow-2xl backdrop-blur-xl">
                    <h2 className="text-xl font-bold mb-6 text-white text-center">Add New Project</h2>

                    {successMsg && <div className="bg-green-500/20 text-green-300 p-4 rounded-xl mb-6 text-center">{successMsg}</div>}
                    {errorMsg && <div className="bg-red-500/20 text-red-300 p-4 rounded-xl mb-6 text-center">{errorMsg}</div>}

                    <form onSubmit={handleAddProject} className="space-y-5">
                        <div>
                            <label className="block text-xs font-semibold text-[#C79A7D] uppercase tracking-wider mb-2">Project Name</label>
                            <input value={projectName} onChange={(e) => setProjectName(e.target.value)} required type="text" className="w-full bg-[#0a0705] border border-[#7B4B35]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D9A066]" placeholder="e.g., E-Commerce Platform" />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[#C79A7D] uppercase tracking-wider mb-2">Description</label>
                            <textarea value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)} required rows={4} className="w-full bg-[#0a0705] border border-[#7B4B35]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D9A066]" placeholder="Briefly describe what you built..." />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-semibold text-[#C79A7D] uppercase tracking-wider mb-2">Image Link</label>
                                <input value={projectImg} onChange={(e) => setProjectImg(e.target.value)} required type="text" className="w-full bg-[#0a0705] border border-[#7B4B35]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D9A066]" placeholder="https://image-link.png or /image.png" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-[#C79A7D] uppercase tracking-wider mb-2">Live Link URL</label>
                                <input value={projectLink} onChange={(e) => setProjectLink(e.target.value)} required type="url" className="w-full bg-[#0a0705] border border-[#7B4B35]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D9A066]" placeholder="https://your-project.vercel.app" />
                            </div>
                        </div>

                        <button disabled={loading} className="w-full mt-6 bg-[#D9A066] text-[#0a0705] font-bold py-4 rounded-xl shadow-lg hover:bg-[#C79A7D] transition-colors uppercase tracking-widest disabled:opacity-50">
                            {loading ? "Publishing..." : "Publish Project"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
