import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { NavLink } from "react-router";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { useState } from "react";

function Header() {
    const navItems = [
        { name: "Home", route: "home" },
        { name: "Experience", route: "experience" },
        { name: "Contact", route: "contact" }
    ]

    const [isDark, setIsDark] = useState(false);

    return (
        <header className="w-full border-b bg-background/80 backdrop-blur sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
                {/* Left */}
                <div className="font-heading">
                    <p className="text-2xl md:text-3xl font-semibold">Portfolio</p>
                </div>
                {/* Center */}
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    {navItems.map((item) => (<NavLink to={item.route} key={item.name} className={({ isActive }) => `${isActive ? "font-semibold text-base cursor-pointer text-primary transition" : "cursor-pointer text-base lg:text-lg opacity-70 hover:text-primary hover:opacity-100 transition-all duration-150"}`}>{item.name}</NavLink>))}
                </div>
                {/* Right */}
                {/* Desktop Menu */}
                <Button className="hidden md:block px-4 py-2 hover:scale-105 cursor-pointer"><a
                    href="./public/Full_stack_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a></Button>
                <div className="flex items-center space-x-2">
                    <Switch id="theme-switch" checked={isDark} onCheckedChange={(checked) => {
                        setIsDark(checked);
                        if (checked) {
                            document.documentElement.classList.add("dark");
                        } else {
                            document.documentElement.classList.remove("dark");
                        }
                    }} />
                    <Label htmlFor="theme-switch">{isDark ? (<Moon size={24} />) : (<Sun size={24} />)}</Label>
                </div>
                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className="md:hidden">
                            <Menu size={20} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-75">
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-8 mt-12">
                                {navItems.map((item) => (
                                    <SheetClose asChild>
                                        <NavLink to={item.route} key={item.name} className="text-lg cursor-pointer hover:text-primary transition flex items-center justify-center" >{item.name}</NavLink>
                                    </SheetClose>
                                ))}

                            </div>
                            <Button className="cursor-pointer mb-8 mx-8">
                                <a
                                    href="./public/Full_stack_resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Header;