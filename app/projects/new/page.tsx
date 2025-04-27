"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function NewProjectPage() {
  const router = useRouter()

  // Form states
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState("")
  const [status, setStatus] = useState("")
  const [githubLink, setGithubLink] = useState("")
  const [websiteLink, setWebsiteLink] = useState("")
  const [coverImage, setCoverImage] = useState<File | null>(null)

  function handleAddTag() {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput("")
    }
  }

  function handleRemoveTag(tag: string) {
    setTags(tags.filter((t) => t !== tag))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newProject = {
      title,
      description,
      tags,
      status,
      githubLink,
      websiteLink,
      coverImageName: coverImage?.name || null,
    }

    console.log("Submitting Project:", newProject)

    alert("Your project has been uploaded successfully!")

    // Reset form
    setTitle("")
    setDescription("")
    setTags([])
    setTagInput("")
    setStatus("")
    setGithubLink("")
    setWebsiteLink("")
    setCoverImage(null)

    setTimeout(() => {
      router.push("/projects")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8 bg-background">
      <Card className="w-full sm:max-w-md md:max-w-lg lg:max-w-3xl">
        <CardHeader className="text-center">
          <CardTitle>Create New Project</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Title */}
            <div className="space-y-2 text-center">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter project title"
                required
              />
            </div>

            {/* Project Description */}
            <div className="space-y-2 text-center">
              <Label htmlFor="description">Project Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your project"
                rows={5}
                required
              />
            </div>

            {/* Tags */}
            <div className="space-y-2 text-center">
              <Label htmlFor="tags">Tags</Label>
              <div className="flex gap-2 justify-center">
                <Input
                  id="tags"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="Add a tag"
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                />
                <Button type="button" variant="secondary" onClick={handleAddTag}>
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 justify-center">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    {tag} ✕
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Status */}
            <div className="space-y-2 text-center">
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
                className="w-full border rounded-md p-2 bg-background"
              >
                <option value="" disabled>Select status</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Seeking Collaborators">Seeking Collaborators</option>
              </select>
            </div>

            {/* Cover Image Upload */}
            <div className="space-y-2 text-center">
              <Label htmlFor="coverImage">Cover Image (Optional)</Label>
              <Input
                id="coverImage"
                type="file"
                accept="image/*"
                onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
              />
            </div>

            {/* GitHub Link */}
            <div className="space-y-2 text-center">
              <Label htmlFor="githubLink">GitHub Repo (Optional)</Label>
              <Input
                id="githubLink"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                placeholder="https://github.com/username/project"
              />
            </div>

            {/* Project Website Link */}
            <div className="space-y-2 text-center">
              <Label htmlFor="websiteLink">Project Website (Optional)</Label>
              <Input
                id="websiteLink"
                value={websiteLink}
                onChange={(e) => setWebsiteLink(e.target.value)}
                placeholder="https://projectwebsite.com"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button type="submit" className="w-full">
                Submit Project
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
